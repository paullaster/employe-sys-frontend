import Table from "./Table";
import THeadItem from "./THeadItem";

const Staff = ({staffs}) => {
  return (
    <Table>
        <THeadItem>Staff ID</THeadItem>
        <THeadItem>Name</THeadItem>
        <THeadItem>Title</THeadItem>
        <THeadItem> Salary </THeadItem>
        <THeadItem>Department</THeadItem>
        <THeadItem>Supervisor</THeadItem>
        <THeadItem>Manager</THeadItem>
        <THeadItem>Start Date</THeadItem>
    </Table>
  );
};
export default Staff;