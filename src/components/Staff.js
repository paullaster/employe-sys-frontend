import StaffTable from "./StaffTable";
import THeadItem from "./THeadItem";
import Button from "./Button";
import '../assets/Button.css'
const Staff = ({staffs}) => {
    

  return (
    <>
    <StaffTable inputData={staffs} caption="Employee Information">
        <THeadItem>Name</THeadItem>
        <THeadItem>Title</THeadItem>
        <THeadItem> Salary </THeadItem>
        <THeadItem>Department</THeadItem>
        <THeadItem>Supervisor</THeadItem>
        <THeadItem>Manager</THeadItem>
        <THeadItem>Start Date</THeadItem>
    </StaffTable>
    <Button type="create">
        Create new staff
    </Button>
    <Button type="update">
        Update staff details
    </Button>
    <Button type="delete">
        Delete staff
    </Button>
    </>
  );
};
export default Staff;