import React, { useState } from "react";
import "./App.css";
import { useNavigate  } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, hide] = useState(true);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();

    if (email === "inter@gmail.com" && password === "12345") {
      navigate("/home");
      
  
    } else if (email === "manger@gmail.com" && password === "12345") {
      navigate("/projects");
    }
    else
    {
      alert("wrog")
    }
  }

  return (
    <div>

      {show && (
        
        <div className="App-header">

<h2 style={{marginBottom:"50px"}}>Sign In</h2>

          <form onSubmit={handleSubmit}>
          <div className="input-container">
          <label>Username </label>
         <input type="email" name="uname" required 
              onChange={(e) => setEmail(e.target.value)}
           
              value={email}
         
         />
            </div>
            <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" required 
           type="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
          
          
          />
          
        </div>
            
           
        <div className="button-container">
          <input type="submit" />
        </div>
          </form>
        </div>
      )}
    </div>
  );
}
