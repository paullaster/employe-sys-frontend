import Table from "./Table";
import THeadItem from "./THeadItem";
import Button from "./Button";
import '../assets/Button.css'


const Departments = ({newdept, update, remove, departments }) => {
  return (
    <>
      <Table inputData={departments} caption="Department Records">
        <THeadItem>Departments ID</THeadItem>
        <THeadItem>Departments Name</THeadItem>
        <THeadItem>Departments Manager</THeadItem>
      </Table>

      <Button type="create" onClick={newdept}>Add department</Button>
      <Button type="update" onClick={update}>Update department</Button>
      <Button type="delete" onClick={remove}>Delete department</Button>
    </>
  );
};
export default Departments;
