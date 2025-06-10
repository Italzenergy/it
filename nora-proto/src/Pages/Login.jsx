import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login=()=>{
    const [user, setUser]= useState('');
    const [pass, setPass]= useState('');
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
    e.preventDefault();
    if(user ==="usuario"&& pass==="1234"){
        navigate("/DashboardUsuario");
    }
    else{
        alert("Credenciales invalidas");
    }
};

return(

<div className="LoginContainer">
<h2>Iniciar Sesion</h2>
<form onSubmit={handleSubmit} className="formularioLogin">
<label>
    Usuario:
    <input
    type="Text"
     value={user} 
      onChange={(e)=>setUser(e.target.value)}
       required
        />
    </label>
<label>
    Contraseña:
    <input 
    type="Pass" 
    value={pass}
    onChange={(e)=>setPass(e.target.value)}
    required
    />
 </label>
 <button type="submit">Entrar</button>
</form>
</div>);
    };
    export default Login;