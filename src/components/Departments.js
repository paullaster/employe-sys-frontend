import Table from "./Table";

const Departments = ({departments}) => {
    console.log ( departments)
    return (
        <Table departments={departments}/>
    )
};
export default Departments;