import Table from "./Table";
import THeadItem from "./THeadItem";
import Form from  "./Form"
import LabelInput from './LabelIpunt';
import Button from "./Button";

const Departments = ({departments}) => {
    return (
        <>
        <Button>
            Add new Department
        </Button>
        <Table inputData={departments} caption="Department Records">
            <THeadItem>Departments ID</THeadItem>
          <THeadItem>Departments Name</THeadItem>
          <THeadItem>Departments Manager</THeadItem>
        </Table>
        </>
    )
};
export default Departments;