



import MotionHoc from "./MotionHoc";
import Sidebar2 from '../Sidear2'

const ProjectsComponent = () => {
  return (
    <div>
      <Sidebar2 />

    <div style={{ marginTop:"50px",marginLeft:"500px"}}>
      <h1>Maneger</h1>
      <hr />

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1h2ME1ky2kWcuUXrN6ih6vkjBRHfXXSmog&usqp=CAU"
        style={{
          width: "112px",
          height: "112px",
          borderRadius: "50px",
          marginLeft: "90px",
          marginTop: "70px",
        }}
      />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h3>Name : </h3>
        <h3 style={{ marginLeft: "30px" }}>Soiya Sharma</h3>
      </div>
      <hr />
      <br />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h3>Date of birth : </h3>
        <h3 style={{ marginLeft: "30px" }}>15-Feb-1995</h3>
      </div>
      <hr />
      <br />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h3>Profile : </h3>
        <h3 style={{ marginLeft: "30px" }}>Sr. Maneger</h3>
      </div>
      <hr />
    </div>
    </div>

  );
};

const Projects = MotionHoc(ProjectsComponent);

export default Projects;
