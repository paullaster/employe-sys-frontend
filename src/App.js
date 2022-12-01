import './App.css';
import Departments from './components/Departments';
import {useState, useEffect} from 'react';
import Staff from './components/Staff';
import DeleteModal from './components/DeleteModal';



const App = () => {


const [departments, setDepartments] = useState ([]);
const [staffs, setStaffs] = useState ([]);
const [openDeleteModel, setDeleteModel] =  useState(false)
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
}, []);

const handleDelete = () => {
  setDeleteModel (true);
};

const handleDeleteApi = () => {
  fetch ('http://localhost:4000/staff/delete', {
    method: 'DELETE',
    headers:{
      "Content-Type":"application/json"
    }
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
    <Departments departments = {departments}/>
    {openDeleteModel && <DeleteModal  />}
    </>
  );
}

export default App;
