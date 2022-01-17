import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogin] = useState(false);

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
          localStorage.setItem("user", JSON.stringify(response.data.user));
          setLogin(true);
        }
      }
    } catch (error) {
      console.log(error);
      alert("wrong user or password");
    }
  };

  if (logged) {
    return <Navigate to="/home" />;
  }
  return (
    <div id="loginModal" className="modal">
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
