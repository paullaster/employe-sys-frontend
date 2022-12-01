const TBodyItem = ({dept}) => {
    return (
        <tr>
            <td>
                {dept.deptId}
            </td>
            <td>
                {dept.deptName}
            </td>
            <td>
                {dept.deptManager}
            </td>
        </tr>
    );
};
export default TBodyItem;