import MotionHoc from "./MotionHoc";
import '../App.css';
import Sidebar from "../Sidebar";

const TeamComponent = () => {
  const data = [
    { task: "module 1", name: "30%", com: "No" },
    { task: "module 2", name: "30%", com: "Yes" },
    { task: "module 3", name: "70%", com: "Yes"},
  ]
  return (
    <div>
     <Sidebar />

   <div style={{marginLeft:"500px"}}>
     <h1 style={{marginLeft: "250px",marginTop:"50px",marginLeft:"150px"}}>Task Assign</h1>
     
  <table>
    <tr>
      <th>Task</th>
      <th>Incomplete</th>
      <th>Complete</th>
    </tr>
    {data.map((val, key) => {
      return (
        <tr key={key}>
          <td>{val.task}</td>
          <td>{val.name}</td>
          <td>{val.com}</td>
        </tr>
      )
    })}
  </table>
</div>
</div>

  )
};

const Team = MotionHoc(TeamComponent);

export default Team;
