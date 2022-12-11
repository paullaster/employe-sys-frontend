import './App.css';
import Departments from './components/Departments';
import {useState, useEffect} from 'react';
import Staff from './components/Staff';
import DeleteModal from './components/DeleteModal';
import DeleteDeptModal from './components/DeleteDeptModal';
import StaffUpdateModal from './components/StaffUpdateModal';
import DeptUpdateModal from './components/DeptUpdateModal';
import CreateNewStaffModal from './components/CreateNewStaffModal';



const App = () => {


const [departments, setDepartments] = useState ([]);
const [staffs, setStaffs] = useState ([]);
const [openDeleteModel, setDeleteModel] =  useState(false);
const [openDeptDeleteModel, setDeptDeleteModel] =  useState(false);
const [inputValue, setInputValue] = useState([]);
const [updateStaffModel, setUpdateStaffModel] = useState(false);
const [updateDeptModal, setUpdateDeptModal] = useState (false);
const [NewStaffModal, setNewStaffModal] = useState (false);
const [staffId, setStaffId] = useState([]);
const [fname, setFname] = useState([]);
const [lname, setLname] = useState([]);
const [supervisor, setSupervisor] = useState([]);
const [salary, setSalary] = useState(0);
const [deptId, setDeptId] = useState([]);
const [title, setTitle] = useState([]);
const [deptName, setDeptName] = useState([]);
const [deptManager, setDeptManager] = useState([]);
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
const handleDeptUpdate = () => {
  setUpdateDeptModal (true);
};
const handleNewStaffModal = () => {
  setNewStaffModal (true);
};
const handleCloseModal = () => {
  setDeleteModel (false);
  setDeptDeleteModel (false);
};

const handleDeptCloseModal = () => {
  setDeptDeleteModel (false);
};
const handleStaffUpdateCloseModel = () => {
  setUpdateStaffModel (false);
};
const handleDeptUpdateCloseModel = () => {
  setUpdateDeptModal (false);
};
const handleNewStaffCloseModal = () => {
  setNewStaffModal (false);
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
    console.log (data) 
  }
  )
  .catch ( (err) => {
    setIsError ( true);
  });
};
const handleDeptUpdateApi = () => {
  fetch ( 'http://localhost:4000/dept/update', {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      deptId:deptId,
      deptName:deptName,
      deptManager:deptManager

    })
  })
  .then ( (resp) => resp.json ())
  .then ( (data) => {
    console.log (data) 
  }
  )
  .catch ( (err) => {
    setIsError ( true);
  });
};

//Create new staff API
const handleNewStaffApi = () => {
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
    console.log (data) 
  }
  )
  .catch ( (err) => {
    setIsError ( true);
  });
};

//Handdling user inputs
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
  setSalary (event.target.value);
};
const handleSupervisorUpdateChange = (event) => {
  setSupervisor (event.target.value);
};

const handleDeptIdUpdateChange = (event) => {
  setDeptId (event.target.value);
};

const handleDeptNameChange = (event) => {
  setDeptName (event.target.value);
};
const handleDeptManagerChange = (event) => {
  setDeptManager (event.target.value);
};
  return (
    <>
    <Staff 
    staffs={staffs}
    newstaff={handleNewStaffModal} 
    update={handleStaffUpdate} 
    onClick={handleDelete}
    />
    <Departments departments = {departments} update={handleDeptUpdate} onClick={handleDeptDelete}/>
    {/**
     * Delete Modals
     */}
    {openDeleteModel && <DeleteModal handleChange={handleChange} closeModel={handleCloseModal} callDeleteApi={handleDeleteApi}/>}
    {openDeptDeleteModel && <DeleteDeptModal handleChange={handleChange} closeModel={handleDeptCloseModal} callDeleteApi={handleDeptDeleteApi}/>}
    {/**
     * update Modals
     */}
    {updateStaffModel && <StaffUpdateModal
    staffid={handleStaffIdUpdateChange}
    fname={handleFnameUpdateChange} 
    lname={handleLnameUpdateChange}
    salary={handleSalaryUpdateChange}
    supervisor={handleSupervisorUpdateChange}
    deptId={ handleDeptIdUpdateChange}
    title={handleTitleUpdateChange}
    closeModel={handleStaffUpdateCloseModel}
    StaffupdateApi = {handleStaffUpdateApi} />}
    {
      updateDeptModal && 
      <DeptUpdateModal
      deptId={handleDeptIdUpdateChange}
      deptName={handleDeptNameChange}
      deptManager={handleDeptManagerChange}
      deptupdateApi={handleDeptUpdateApi}
      closeModel={handleDeptUpdateCloseModel}
      />
    }
    {/**
     * create new Modals
     */}
     {
      NewStaffModal && 
      <CreateNewStaffModal
      closeModel={handleNewStaffCloseModal}
      />
     }
    </>
  );
}

export default App;
