const TBodyItem = ({department}) => {
    return (
        <tr>
            <td>
                {department.deptId}
            </td>
            <td>
                {department.deptName}
            </td>
            <td>
                {department.deptManager}
            </td>
        </tr>
    );
};
export default TBodyItem;