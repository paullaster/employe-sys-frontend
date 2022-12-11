import React from "react";
import Form from "./Form";
import LabelInput from "./LabelIpunt";
import Button from "./Button";
import '../assets/model.css'
const CreateNewStaffModal = (
    {staffid, fname, lname, supervisor, salary, 
      deptId, title, startDate, closeModel, createNewStaff }) => {
  return (
    <div className="modal">
      <div className="modal-container-staff_createnew">
        <div className="modal-header">
          <div className="closeModel" onClick={closeModel}>&times;</div>
        </div>
        <div className="modal-body">
          <Form>
            <LabelInput handleChange={staffid}>Staff ID</LabelInput>
            <LabelInput handleChange={deptId}>Department ID</LabelInput>
            <LabelInput handleChange={fname}>First Name</LabelInput>
            <LabelInput handleChange={lname}>Last Name</LabelInput>
            <LabelInput handleChange={supervisor}>Supervisor</LabelInput>
            <LabelInput type='number' handleChange={salary}>Salary</LabelInput>
            <LabelInput handleChange={title}>Title</LabelInput>
            <LabelInput type='date' handleChange={startDate}>Start Date</LabelInput>
          </Form>
        </div>
        <div className="modal-footer">
            <Button onClick={()=> {closeModel (); createNewStaff ();}}>create new staff</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewStaffModal;
