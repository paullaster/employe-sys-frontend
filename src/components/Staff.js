import StaffTable from "./StaffTable";
import THeadItem from "./THeadItem";

const Staff = ({staffs}) => {
  return (
    <StaffTable inputData={staffs} caption="Employee Information">
        <THeadItem>Name</THeadItem>
        <THeadItem>Title</THeadItem>
        <THeadItem> Salary </THeadItem>
        <THeadItem>Department</THeadItem>
        <THeadItem>Supervisor</THeadItem>
        <THeadItem>Manager</THeadItem>
        <THeadItem>Start Date</THeadItem>
    </StaffTable>
  );
};
export default Staff;