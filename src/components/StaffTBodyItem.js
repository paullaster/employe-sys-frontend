const StaffTBodyItem = ({data}) => {
    return (
        <tr>
            <td>
                {data.staffId}
            </td>
            <td>
                {data.fname + ' ' + data.lname}
            </td>
            <td>
                {data.title}
            </td>
            <td>
                Ksh. {data.salary}
            </td>
            <td>
                {data.deptName}
            </td>
            <td>
                {data.supervisor}
            </td>
            <td>
                {data.deptManager}
            </td>
            <td>
                {data.startDate}
            </td>
        </tr>
    );
};
export default StaffTBodyItem;