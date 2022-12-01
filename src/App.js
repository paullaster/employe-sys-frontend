import './App.css';
import Departments from './components/Departments';
import {useState, useEffect} from 'react';
import Staff from './components/Staff';
import DeleteModal from './components/DeleteModal';
import DeleteDeptModal from './components/DeleteDeptModal';



const App = () => {


const [departments, setDepartments] = useState ([]);
const [staffs, setStaffs] = useState ([]);
const [openDeleteModel, setDeleteModel] =  useState(false);
const [openDeptDeleteModel, setDeptDeleteModel] =  useState(false);
const [inputValue, setInputValue] = useState([]);
const [isError, setIsError] = useState ( false);

const fetchDepartments = () => {
  fetch ( 'http://localhost:4000/dept/search/all', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then ( (resp) => {
    return resp.json();
  })
  .then ( (data) => {
    setDepartments (data.data)
  })
  .catch ( (error) => {
    setIsError (true);
  });
};


const fetchStaffs = () => {
  fetch ( 'http://localhost:4000/staff/search/all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then ( (resp) => {
    return resp.json();
  } )
  .then ( (data) => {
    setStaffs (data.data);
  } )
  .catch ( (error) => {
    setIsError ( true);
  });
};


useEffect ( () => {
  fetchDepartments ();
  fetchStaffs ();
}, [staffs, departments ]);


const handleChange = (event) => {
  setInputValue (event.target.value);
};

const handleDelete = () => {
  setDeleteModel (true);
};

const handleDeptDelete = () => {
  setDeptDeleteModel (true);
};

const handleCloseModal = () => {
  setDeleteModel (false);
  setDeptDeleteModel (false);
};

const handleDeptCloseModal = () => {
  setDeptDeleteModel (false);
};

const handleDeleteApi = () => {
   
  fetch ('http://localhost:4000/staff/delete', {
    method: 'DELETE',
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({staffId: inputValue})
  })
  .then ( (resp) =>{
    return resp.json();
  })
  .then ( (data) => {
    console.log (data);
  } )
  .catch ( (error) => {
    setIsError (true)
  });
};

const handleDeptDeleteApi = () => {
   
  fetch ('http://localhost:4000/dept/delete', {
    method: 'DELETE',
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({deptId: inputValue})
  })
  .then ( (resp) =>{
    return resp.json();
  })
  .then ( (data) => {
    console.log (data);
  } )
  .catch ( (error) => {
    setIsError (true)
  });
};


  return (
    <>
    <Staff staffs={staffs} onClick={handleDelete}/>
    <Departments departments = {departments} onClick={handleDeptDelete}/>
    {openDeleteModel && <DeleteModal handleChange={handleChange} closeModel={handleCloseModal} callDeleteApi={handleDeleteApi}/>}
    {openDeptDeleteModel && <DeleteDeptModal handleChange={handleChange} closeModel={handleDeptCloseModal} callDeleteApi={handleDeptDeleteApi}/>}
    </>
  );
}

export default App;
