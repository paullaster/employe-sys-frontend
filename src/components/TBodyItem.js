const TBodyItem = ({data}) => {
    return (
        <tr>
            <td>
                {data.deptId}
            </td>
            <td>
                {data.deptName}
            </td>
            <td>
                {data.deptManager}
            </td>
        </tr>
    );
};
export default TBodyItem;