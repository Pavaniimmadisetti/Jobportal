import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: "", password: "" });

  const handleLogin = () => {
    axios.post("http://localhost:5000/auth/login", login)
      .then(res => {
        if(res.data.id) navigate("/jobs");
        else alert("Invalid login");
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e)=>setLogin({...login,email:e.target.value})} />
      <input placeholder="Password" onChange={(e)=>setLogin({...login,password:e.target.value})} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;