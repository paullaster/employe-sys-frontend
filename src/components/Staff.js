import StaffTable from "./StaffTable";
import THeadItem from "./THeadItem";
import Button from "./Button";

const Staff = ({staffs}) => {
    const handleAddNewStaff = () => {
        alert("Please");
    };

  return (
    <>
    <Button onClick={handleAddNewStaff}>
        Create new staff
    </Button>
    <StaffTable inputData={staffs} caption="Employee Information">
        <THeadItem>Name</THeadItem>
        <THeadItem>Title</THeadItem>
        <THeadItem> Salary </THeadItem>
        <THeadItem>Department</THeadItem>
        <THeadItem>Supervisor</THeadItem>
        <THeadItem>Manager</THeadItem>
        <THeadItem>Start Date</THeadItem>
    </StaffTable>
    </>
  );
};
export default Staff;