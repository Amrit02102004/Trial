import "./App.css";
import axios from "axios";
import  { useContext , createContext , useState, useEffect } from "react";
import authReducer from './authReducer';
import authActions from './authActions';


function App() {

  const [ name, setName ] = useState("");
  const [ age, setAge ] = useState(0);
  const addData = async () => {
    let FormField = new FormData();

    FormField.append("name", name);
    console.log(FormField);

    await axios({
      method : "POST",
      url : "http://localhost:8000/get",
      data : FormField,
      headers: {
          'accept': 'application/json',
          'content-type' :'multipart/form-data'
      },

    }).then((response) => {
      if(response.data.ans === "1"){
        authReducer();

      }
      else{
        console.log("Dont Log In");
    }
    }).catch((error) => {
      console.log(error);
    })
  };

  // const tryData = async () => {
  //   const data = new FormData();
  //   data.append("name", name);
  //   await axios({
  //     method: "POST",
  //     url: "http://127.0.0.1:8000/get",
  //     data: data,
  //     headers: {
  //         'accept': 'application/json',
  //         'content-type' : 'multipart/form-data'
  //     },
     
  // })
  // .then(res=>{
  //   console.log("Success!!! Lol !!");
  // })
  // .catch(err => {
  //     console.log("Error");
  //     console.log(err);
  // })
  // }
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
