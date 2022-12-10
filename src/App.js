import './App.css';
import Departments from './components/Departments';
import {useState, useEffect} from 'react';
import Staff from './components/Staff';
import DeleteModal from './components/DeleteModal';
import DeleteDeptModal from './components/DeleteDeptModal';
import StaffUpdateModal from './components/StaffUpdateModal';



const App = () => {


const [departments, setDepartments] = useState ([]);
const [staffs, setStaffs] = useState ([]);
const [openDeleteModel, setDeleteModel] =  useState(false);
const [openDeptDeleteModel, setDeptDeleteModel] =  useState(false);
const [inputValue, setInputValue] = useState([]);
const [updateStaffModel, setUpdateStaffModel] = useState(false);
const [staffId, setStaffId] = useState([]);
const [fname, setFname] = useState([]);
const [lname, setLname] = useState([]);
const [supervisor, setSupervisor] = useState([]);
const [salary, setSalary] = useState(0);
const [deptId, setDeptId] = useState([]);
const [title, setTitle] = useState([]);
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

const handleStaffUpdate = () => {
  setUpdateStaffModel (true);
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
    //console.log (data);
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
    //console.log (data);
  } )
  .catch ( (error) => {
    setIsError (true)
  });
};

// console.log (
//   {
//     staffId:staffId,
//       fname:fname,
//       lname:lname,
//       supervisor:supervisor,
//       salary:parseFloat(salary),
//       deptId:deptId,
//       title:title,
//   }
// )
const handleStaffUpdateApi = () => {
  fetch ( 'http://localhost:4000/staff/update', {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      staffId:staffId,
      fname:fname,
      lname:lname,
      supervisor:supervisor,
      salary:parseFloat(salary),
      deptId:deptId,
      title:title,

    })
  })
  .then ( (resp) => resp.json ())
  .then ( (data) => {
    //console.log (data) 
  }
  )
  .catch ( (err) => {
    setIsError ( true);
  });
};


const handleStaffUpdateCloseModel = () => {
  setUpdateStaffModel (false);
};

const handleTitleUpdateChange = (event) => {
  setTitle (event.target.value);
};
const handleLnameUpdateChange = (event) => {
  setLname (event.target.value);
};
const handleFnameUpdateChange = (event) => {
  setFname (event.target.value);
};
const handleStaffIdUpdateChange = (event) => {
  setStaffId (event.target.value);
};
const handleSalaryUpdateChange = (event) => {
  console.log(event.target.value)
  //setSalary (event.target.value);
};
const handleSupervisorUpdateChange = (event) => {
  setSupervisor (event.target.value);
};

const handleDeptIdUpdateChange = (event) => {
  setDeptId (event.target.value);
};
  return (
    <>
    <Staff staffs={staffs} update={handleStaffUpdate} onClick={handleDelete}/>
    <Departments departments = {departments} onClick={handleDeptDelete}/>
    {openDeleteModel && <DeleteModal handleChange={handleChange} closeModel={handleCloseModal} callDeleteApi={handleDeleteApi}/>}
    {openDeptDeleteModel && <DeleteDeptModal handleChange={handleChange} closeModel={handleDeptCloseModal} callDeleteApi={handleDeptDeleteApi}/>}
    {updateStaffModel && <StaffUpdateModal
    staffid={handleStaffIdUpdateChange}
    fname={handleFnameUpdateChange} 
    lname={handleLnameUpdateChange}
    Salary={handleSalaryUpdateChange}
    supervisor={handleSupervisorUpdateChange}
    deptId={ handleDeptIdUpdateChange}
    title={handleTitleUpdateChange}
    closeModel={handleStaffUpdateCloseModel}
    StaffupdateApi = {handleStaffUpdateApi} />}
    </>
  );
}

export default App;
