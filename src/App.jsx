import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Userlayout from "./component/layout/Userlayout";
import Project1 from "./component/layout/Project1";
import FormSubmissionLayout from "./component/layout/FormSubmissionLayout";
import FormExLayout from "./component/FormExercise/FormExLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Project1/>}></Route> */}
          {/* <Route path="/" element={<Userlayout/>}/> */}
          {/* <Route path="/" element={<FormSubmissionLayout/>}/> */}
          <Route path="/" element={<FormExLayout/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
