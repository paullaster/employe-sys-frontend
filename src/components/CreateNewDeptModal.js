import React from 'react'
import Form from "./Form";
import LabelInput from "./LabelIpunt";
import Button from "./Button";
import '../assets/model.css'
const CreateNewDeptModal = ({deptId, deptName, deptManager, closeModel, createNewDept  }) => {
            return (
                <div className="modal">
                  <div className="modal-container-dept_createnew">
                    <div className="modal-header">
                      <div className="closeModel" onClick={closeModel}>&times;</div>
                    </div>
                    <div className="modal-body">
                      <Form>
                        <LabelInput handleChange={deptId}>Department ID</LabelInput>
                        <LabelInput handleChange={deptName}>Department Name</LabelInput>
                        <LabelInput handleChange={deptManager}>Department Manager</LabelInput>
                       
                      </Form>
                    </div>
                    <div className="modal-footer">
                        <Button onClick={()=> {closeModel (); createNewDept ();}}>Update</Button>
                    </div>
                  </div>
                </div>
                )
}
export default CreateNewDeptModal;