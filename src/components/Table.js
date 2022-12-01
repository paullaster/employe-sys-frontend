import TBodyItem from "./TBodyItem";
import {v4 as uuidv4} from 'uuid';
const Table = ({ inputData, caption = "Table", children }) => {
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
          return <TBodyItem key={uuidv4 ()} data={data} />;
        })}
      </tbody>
    </table>
  );
};
export default Table;
