import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./home";
import Student from "./student";
import ContactUs from "./contactUs";
import StudentDesc from "./studentDesc";

function RouterComponent(){
    return (
        <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={<Layout/>}/> */}
            <Route path="/" element={<Home/>} />
            <Route path="/student" element={<Student/>} />
            <Route path="/contactUs" element={<ContactUs/>} />

            <Route path="/students-desc" element={<StudentDesc/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default RouterComponent;