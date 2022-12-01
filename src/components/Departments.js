import Table from "./Table";
import THeadItem from "./THeadItem";
import Button from "./Button";
import '../assets/Button.css'


const Departments = ({ departments }) => {
  return (
    <>
      <Table inputData={departments} caption="Department Records">
        <THeadItem>Departments ID</THeadItem>
        <THeadItem>Departments Name</THeadItem>
        <THeadItem>Departments Manager</THeadItem>
      </Table>

      <Button type="create">Add department</Button>
      <Button type="update">update department</Button>
      <Button type="delete">Delete department</Button>
    </>
  );
};
export default Departments;
