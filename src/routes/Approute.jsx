import { Route,Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import ValidationPage from "../pages/ValidationPage";
import Enterprenuers from "../pages/Enterprenuers";
import Feedback from "../pages/Feedback";

const Approute = () => {
  return (
    <Routes>
        {/* <Route path="/" element={<Login/>}/> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/verify" element={<ValidationPage/>}/>
        <Route path="/student-enterprenuers" element={<Enterprenuers/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
    </Routes>
  )
}

export default Approute;