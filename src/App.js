import './App.css';
import Departments from './components/Departments';
import {useState, useEffect} from 'react';
import Staff from './components/Staff';



const App = () => {


const [departments, setDepartments] = useState ([]);
const [staffs, setStaffs] = useState ([]);

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




  return (
    <>
    <Staff staffs={staffs}/>
    <Departments departments = {departments}/>
    </>
  );
}

export default App;
