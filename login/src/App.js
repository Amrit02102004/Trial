import "./App.css";
import axios from "axios";
import react, { useState, useEffect } from "react";

function App() {
  const [ name, setName ] = useState("");
  const [ age, setAge ] = useState(0);
  const addData = async () => {
    let FormField = new FormData();

    FormField.append("name", name);
    FormField.append("age", age);
    console.log(FormField);

    await axios({
      method : "POST",
      url : "http://localhost:8000/get",
      data : FormField

    }).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    })
  };
  return (
    <div className="App">
      <label for="name">Name : </label>
      <input type="text" name="name" value = {name} onChange={(e)=>setName(e.target.value)} id="name" />
      <br></br>
      <label for="age">Age : </label>
      <input type="text" name="age" value = {age} onChange={(e)=>setAge(e.target.value)} id="age" />
      <br></br>
      <input type="submit" onClick = {addData} value="Submit" />
    </div>
  );
}

export default App;
