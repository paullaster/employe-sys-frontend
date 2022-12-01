import React from "react";
import Form from "./Form";
import LabelInput from "./LabelIpunt";
import Button from "./Button";
import '../assets/model.css'
const DeleteDeptModal = ({handleChange, closeModel, callDeleteApi}) => {
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-header">
          <div className="closeModel" onClick={closeModel}>&times;</div>
        </div>
        <div className="modal-body">
          <Form>
            <LabelInput handleChange={handleChange}>Enter Staff ID to delete</LabelInput>
          </Form>
        </div>
        <div className="modal-footer">
            <Button onClick={()=> {closeModel (); callDeleteApi ();}}>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDeptModal;
