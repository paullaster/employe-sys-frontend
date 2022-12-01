import './App.css';
import Departments from './components/Departments';
import {useState, useEffect} from 'react';
//import {Routes, Route, Link} from 'react-router-dom';



const App = () => {


const [department, setDepartment] = useState ([]);

const fetchDepartments = () => {
  fetch
};

useEffect ( () => {

}, [])

  return (
    <>
     <Departments department = {department}/>
    </>
  );
}

export default App;
