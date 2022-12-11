import './App.css';
import Departments from './components/Departments';
import {useState, useEffect} from 'react';
import Staff from './components/Staff';
import DeleteModal from './components/DeleteModal';
import DeleteDeptModal from './components/DeleteDeptModal';
import StaffUpdateModal from './components/StaffUpdateModal';
import DeptUpdateModal from './components/DeptUpdateModal';
import CreateNewStaffModal from './components/CreateNewStaffModal';
import CreateNewDeptModal from './components/CreateNewDeptModal';
import Message from './components/Message';


const App = () => {


const [departments, setDepartments] = useState ([]);
const [staffs, setStaffs] = useState ([]);
const [openDeleteModel, setDeleteModel] =  useState(false);
const [openDeptDeleteModel, setDeptDeleteModel] =  useState(false);
const [inputValue, setInputValue] = useState([]);
const [updateStaffModel, setUpdateStaffModel] = useState(false);
const [updateDeptModal, setUpdateDeptModal] = useState (false);
const [NewStaffModal, setNewStaffModal] = useState (false);
const [newDeptModal, setNewDeptModal] = useState (false);
const [staffId, setStaffId] = useState([]);
const [fname, setFname] = useState([]);
const [lname, setLname] = useState([]);
const [supervisor, setSupervisor] = useState([]);
const [salary, setSalary] = useState(0);
const [deptId, setDeptId] = useState([]);
const [title, setTitle] = useState([]);
const [StaffStartDate, setStaffStartDate] = useState([]);
const [deptName, setDeptName] = useState([]);
const [deptManager, setDeptManager] = useState([]);
const [isError, setIsError] = useState ( false);
const [isSuccess, setIsSuccess] = useState ([]);


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
    setDepartments (data.data);
    setIsSuccess (data.message);
  })
  .catch ( (error) => {
    setIsError (true);
  });
};

// Fetch Staff from backend API
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
    //setIsSuccess (data.message);
  } )
  .catch ( (error) => {
    setIsError ( true);
  });
};


useEffect ( () => {
  fetchDepartments ();
  fetchStaffs ();
}, [staffs, departments, isSuccess ]);


const handleChange = (event) => {
  setInputValue (event.target.value);
};

//Handling openning Modals:
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
const handleNewDeptModal = () => {
  setNewDeptModal (true);
};


//Handling closing Modals
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

const handleNewDeptCloseModal = () => {
  setNewDeptModal (false);
};

//Back-end APIs
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
    setIsSuccess (data.message);
  } )
  .catch ( (error) => {
    setIsError (true)
  });
};
console.log (isSuccess)
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
    setIsSuccess (data.message);
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
    //console.log (data) 
    setIsSuccess (data.message);
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
    //console.log (data) 
    setIsSuccess (data.message);
  }
  )
  .catch ( (err) => {
    setIsError ( true);
  });
};

//Create new staff API
const handleNewStaffApi = () => {
  fetch ( 'http://localhost:4000/staff/insert', {
    method: 'POST',
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
      startDate:StaffStartDate,
    })
  })
  .then ( (resp) => resp.json ())
  .then ( (data) => {
    //console.log (data) 
    setIsSuccess (data.message);
  }
  )
  .catch ( (err) => {
    setIsError ( true);
  });
};

//Create new Department API
const handleNewDeptApi = () => {
  fetch ( 'http://localhost:4000/dept/insert', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      deptId:deptId,
      deptName:deptName,
      deptManager:deptManager,
    })
  })
  .then ( (resp) => resp.json ())
  .then ( (data) => {
    //console.log (data) 
    setIsSuccess (data.message);
  }
  )
  .catch ( (err) => {
    setIsError ( true);
  });
};

//Handdling user inputs
const handleStaffTitleChange = (event) => {
  setTitle (event.target.value);
};
const handleStaffLNameChange = (event) => {
  setLname (event.target.value);
};
const handleStaffFNameChange = (event) => {
  setFname (event.target.value);
};
const handleStaffIdChange = (event) => {
  setStaffId (event.target.value);
};
const handleStaffSalaryChange = (event) => {
  setSalary (event.target.value);
};
const handleStaffSupervisorChange = (event) => {
  setSupervisor (event.target.value);
};

const handleDeptIdChange = (event) => {
  setDeptId (event.target.value);
};

const handleDeptNameChane = (event) => {
  setDeptName (event.target.value);
};
const handleDeptManagerChange = (event) => {
  setDeptManager (event.target.value);
};
const handleStaffStartDateChange = (event) => {
  setStaffStartDate (event.target.value);
};
  return (
    <>
    {
      /**
       * Staff Component
       */
    }
    <Staff 
    staffs={staffs}
    newstaff={handleNewStaffModal} 
    update={handleStaffUpdate} 
    remove={handleDelete}
    />
    {
      /**
       * Department Component
       */
    }
    <Departments 
    departments = {departments}
    newdept={handleNewDeptModal} 
    update={handleDeptUpdate} 
    remove={handleDeptDelete}
    />
    {/**
     * Delete Modals
     */}
    {/* 
      Delete Staff
    */}
    {openDeleteModel && 
    <DeleteModal 
    handleChange={handleChange} 
    closeModel={handleCloseModal} 
    callDeleteApi={handleDeleteApi}
    />
    }
    {/* Delete Department */}
    {openDeptDeleteModel && 
    <DeleteDeptModal 
    handleChange={handleChange} 
    closeModel={handleDeptCloseModal} 
    callDeleteApi={handleDeptDeleteApi}
    />
    }

    {/**
     * update Modals
     */}
    {/* Update staff */}
    {updateStaffModel && 
    <StaffUpdateModal
    staffid={handleStaffIdChange}
    fname={handleStaffFNameChange} 
    lname={handleStaffLNameChange}
    salary={handleStaffSalaryChange}
    supervisor={handleStaffSupervisorChange}
    deptId={ handleDeptIdChange}
    title={handleStaffTitleChange}
    closeModel={handleStaffUpdateCloseModel}
    StaffupdateApi = {handleStaffUpdateApi} 
    />
    }
    {/* Update department */}
    {
      updateDeptModal && 
      <DeptUpdateModal
      deptId={handleDeptIdChange}
      deptName={handleDeptNameChane}
      deptManager={handleDeptManagerChange}
      deptupdateApi={handleDeptUpdateApi}
      closeModel={handleDeptUpdateCloseModel}
      />
    }
      {/* Creating new */}

    {/**
     * create new staff Modals
     */}
     {
      NewStaffModal && 
      <CreateNewStaffModal
      staffid={handleStaffIdChange}
       fname={handleStaffFNameChange}
        lname={handleStaffLNameChange}
        supervisor={handleStaffSupervisorChange}
        salary={handleStaffSalaryChange} 
        deptId={handleDeptIdChange}
       title={handleStaffTitleChange}
       startDate={handleStaffStartDateChange}
      closeModel={handleNewStaffCloseModal}
      createNewStaff={handleNewStaffApi}
      />
     }
     {/* Create new dept */}
     {
      newDeptModal &&
      <CreateNewDeptModal 
      deptId={handleDeptIdChange}
      deptName={handleDeptNameChane}
      deptManager={handleDeptManagerChange}
      createNewDept={handleNewDeptApi}
      closeModel={handleNewDeptCloseModal}
      />
     }
     <Message 
     duration={50000}
     message={isSuccess}
     />
    </>
  );
}

export default App;
