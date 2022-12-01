import StaffTBodyItem from "./StaffTBodyItem";
import {v4 as uuidv4} from 'uuid';
import '../assets/table.css'
const StaffTable = ({ inputData, caption = "Table", children }) => {
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
        {inputData.map(data => {
          return <StaffTBodyItem key={uuidv4 ()} data={data} />;
        })}
      </tbody>
    </table>
  );
};
export default StaffTable;