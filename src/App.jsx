import { useRef, useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import "./App.css"
function App() {

  const [status, setStatus]=useState(false)
  const [btn, setBtn]=useState("Add new student")

  return (
    <div className="App">
      <button className="togglebtn" onClick={ ()=>{setStatus(!status); setBtn(btn=="Add new student"? "Go to stuents list": "Add new student")}}>{btn}</button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {status? <AddStudent/>:  <ShowStudents/>}
      
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;
