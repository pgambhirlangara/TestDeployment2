import './App.css';
import React, { useState } from "react";
import axios from "axios";

function App() {

  const [name, setName ] = useState("");



  const submitForm = async (e) => {
    e.preventDefault();

    console.log('working');
   
    try {
      const response = await axios.post('/user/register', {
        name
      })

      console.log(response, "response");
    } catch (error){
      console.log(error, "i got this error");
    }
    
  }

  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <input value={name} placeholder="Enter Name" onChange={(event) => setName(event.target.value) } />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
