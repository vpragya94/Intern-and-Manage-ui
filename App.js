import { Route, Routes, useLocation } from "react-router";
import Sidebar from "./Sidebar";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Calender from "./Pages/Calender";
import Documents from "./Pages/Documents";
import Projects from "./Pages/Projects";
import styled from "styled-components";
import Login from "./Login";
import { AnimatePresence } from "framer-motion";

// const Pages = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   h1 {
//     font-size: calc(2rem + 2vw);
//     background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }
// `;

function App() {
  const location = useLocation();
  return (
    <>
      {/* <Pages> */}
      <AnimatePresence exitBeforeEnter>

        <Routes>
          <Route exact path="/" element={<Login />} />


          <Route exact path="/home" element={<Home />} />

          <Route path="/team" element={<Team />} />
          <Route path="/documents" element={<Documents />} />

          <Route path="/projects" element={<Projects/>} />




        </Routes>


        {/* </Switch> */}
      </AnimatePresence>
      {/* </Pages> */}
    </>
  );
}

export default App;
