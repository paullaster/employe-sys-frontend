import React from "react";
import Form from "./Form";
import LabelInput from "./LabelIpunt";
import Button from "./Button";
import '../assets/model.css'
const DeleteModal = ({handleChange, closeModel, callDeleteApi}) => {
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-header">
          <div className="closeModel" onClick={closeModel}>&times;</div>
        </div>
        <div className="modal-body">
          <Form>
            <LabelInput handleChange={handleChange}>First Name</LabelInput>
            <LabelInput handleChange={handleChange}>Last Name</LabelInput>
            <LabelInput handleChange={handleChange}>Supervisor</LabelInput>
            <LabelInput handleChange={handleChange}>Salary</LabelInput>
            <LabelInput handleChange={handleChange}>Department ID</LabelInput>
            <LabelInput handleChange={handleChange}>Title</LabelInput>
          </Form>
        </div>
        <div className="modal-footer">
            <Button onClick={()=> {closeModel (); callDeleteApi ();}}>Update</Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
