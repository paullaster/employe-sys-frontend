import Table from "./Table";
import THeadItem from "./THeadItem";

const Departments = ({departments}) => {
    return (
        <Table departments={departments} caption="Department Records">
            <THeadItem>Departments ID</THeadItem>
          <THeadItem>Departments Name</THeadItem>
          <THeadItem>Departments Manager</THeadItem>
        </Table>
    )
};
export default Departments;