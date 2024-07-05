import { Route,Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import ValidationPage from "../pages/ValidationPage";

const Approute = () => {
  return (
    <Routes>
        {/* <Route path="/" element={<Login/>}/> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/verify" element={<ValidationPage/>}/>
    </Routes>
  )
}

export default Approute;