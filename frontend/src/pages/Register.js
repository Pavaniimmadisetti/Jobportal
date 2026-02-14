import axios from "axios";
import { useState } from "react";

function Register() {
  const [user, setUser] = useState({ name: "", email: "", password: "", role: "jobseeker" });

  const handleSubmit = () => {
    axios.post("http://localhost:5000/auth/register", user)
      .then(res => alert(res.data));
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" onChange={(e)=>setUser({...user,name:e.target.value})} />
      <input placeholder="Email" onChange={(e)=>setUser({...user,email:e.target.value})} />
      <input placeholder="Password" onChange={(e)=>setUser({...user,password:e.target.value})} />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default Register;