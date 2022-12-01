import TBodyItem from "./TBodyItem";
const Table = ({departments}) => {
    return (
        <table>
            <caption>
                Departments details
            </caption>
            <thead>
                <tr>
                    <th>Dept ID</th>
                    <th>Depart Name</th>
                    <th>Department Manager</th>
                </tr>
            </thead>
            <tbody>
                {
                    departments.map ( (department) => {
                        return (
                            <TBodyItem key={department.deptId} department={department}/>
                        )
                    })
                }
            </tbody>
        </table>
    );
};
export default Table;