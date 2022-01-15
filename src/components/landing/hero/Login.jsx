import { useState } from "react";
//import {Redirect} from 'react-router-dom'
import axios from "axios";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailOnChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordOnChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (email && password) {
        const objectBody = {
          mail: email,
          password: password,
        };
      
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        objectBody
      );
      if (!response.error) {
        localStorage.setItem("token", response.data.token);
        console.log('TOKEN', response.data.token)
        localStorage.setItem("user", JSON.stringify(response.data.user));
        console.log('USUARIO', response.data.user);
        //<Redirect to='/main'/>
        //ver como redirigir a window.location = `../qpid/src/pages/home.html`;
      }
    }
    } catch (error) {
      alert("wrong user or password");
    }
  };

  return (
    <div  id="loginModal" className="modal">
      {/* Modal content */}
      <div className="modal-content">
        <span className="closeLogin">×</span>
        <form onSubmit={handleSubmit} id="loginForm">
          <div className="container">
            <h1>Iniciar sesion</h1>
            <hr />
            <label htmlFor="mailLogin">
              <b>Email</b>
            </label>
            <input
              onChange={handleEmailOnChange}
              id="mailLogin"
              type="email"
              name="mailLogin"
              placeholder="Ingrese su correo"
              className="input-form"
              value={email}
            />
            <label htmlFor="passwordLogin">
              <b>Password</b>
            </label>
            <input
              onChange={handlePasswordOnChange}
              id="passwordLogin"
              type="password"
              name="passwordLogin"
              placeholder="Ingrese su contraseña"
              className="input-form"
              value={password}
            />
            <button id="login" className="loginbtn">
              Login!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
