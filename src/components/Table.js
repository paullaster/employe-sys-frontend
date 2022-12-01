import TBodyItem from "./TBodyItem";
const Table = ({ departments, caption = "Table", children }) => {
  return (
    <table>
      <caption>
        {caption}
      </caption>
      <thead>
        <tr>
          {children}
        </tr>
      </thead>
      <tbody>
        {departments.map(department => {
          return <TBodyItem key={department.deptId} department={department} />;
        })}
      </tbody>
    </table>
  );
};
export default Table;
