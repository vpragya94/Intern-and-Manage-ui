
import MotionHoc from "./MotionHoc";
import '../App.css';
import Sidebar2 from "../Sidear2";

const DocumentsComponent = () => {
  const data = [
    { task: "module 1", name: "Rahul", work: "No" },
    { task: "module 2", name: "Rohan", work: "Yes" },
    { task: "module 3", name: "Akash", work: "Yes"},
  ]
  return (
    <div>
     <Sidebar2 />

   <div style={{marginLeft:"500px"}}>
     <h1 style={{marginLeft: "250px",marginTop:"50px",marginLeft:"150px"}}>Task Assigned</h1>
     
  <table>
    <tr>
      <th>Task</th>
      <th>Developer Name</th>
      <th>Complete</th>
    </tr>
    {data.map((val, key) => {
      return (
        <tr key={key}>
          <td>{val.task}</td>
          <td>{val.name}</td>
          <td>{val.work}</td>
        </tr>
      )
    })}
  </table>
</div>
</div>

  )
};

const Documents = MotionHoc(DocumentsComponent);

export default Documents;
