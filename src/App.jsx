import React from "react";


import Userlayout from "./component/layout/Userlayout";
import Project1 from "./component/layout/Project1";
import FormSubmissionLayout from "./component/layout/FormSubmissionLayout";
import FormExLayout from "./component/FormExercise/FormExLayout";
import FormPracticeLayout from "./component/FormPractice/FormPracticeLayout";
import Navbar from "./component/RoutingExamples/Navbar";

import Routing from "./utils/Routing";

function App() {
  return (
    <>

    <Navbar/>


    <Routing/>

 
      
    </>
  );
}

export default App;
