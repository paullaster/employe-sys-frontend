import './App.css';
import Departments from './components/Departments';
import {useState, useEffect} from 'react';
//import {Routes, Route, Link} from 'react-router-dom';



const App = () => {


const [departments, setDepartments] = useState ([]);
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

useEffect ( () => {
  fetchDepartments ();
}, [])

  return (
    <>
     <Departments departments = {departments}/>
    </>
  );
}

export default App;
