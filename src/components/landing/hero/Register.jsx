import { useState } from "react";
import axios from "axios";

const Register = () => {
  // Fields state
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [distance, setDistance] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");
  const [interests, setInterests] = useState([]);
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  //Handle Functions
  const handleNameOnChange = e => {
    setName(e.target.value);
  };
  const handleAgeOnChange = e => {
    setAge(e.target.value);
  };
  const handleEmailOnChange = e => {
    setEmail(e.target.value);
  };
  const handleGenderOnChange = e => {
    setGender(e.target.value);
  };
  const handleLookingForOnChange = e => {
    setLookingFor(e.target.value);
  };
  const handleDistanceOnChange = e => {
    setDistance(e.target.value);
  };
  const handleBioOnchange = e => {
    setBio(e.target.value);
  };
  const handleImageOnChange = e => {
    setImage(e.target.value);
  };
  const handleInterestsOnChange = e => {
    if (e.target.checked) {
      setInterests([...interests, e.target.value]);
      console.log(e.target.value);
      console.log("TAGS ", interests.length);
    }
  };
  const handlePasswordOnChange = e => {
    setPassword(e.target.value);
  };
  const handlePasswordRepeatOnChange = e => {
    setPasswordRepeat(e.target.value);
  };
  const objectBody = {};

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      if (password === passwordRepeat) {
        const objectBody = {
          name: name,
          age: age,
          gender: gender,
          lookingFor: lookingFor,
          distance: distance,
          bio: bio,
          image: image,
          mail: email,
          interests: interests,
          password: password,
        };
        console.log('EL BODY', objectBody);
        const response = await axios.post(
          "http://localhost:3000/auth/register",
          objectBody
        );
        if (!response.error) {
          alert(`registro exitoso ${response.data.newUser}`);
          //<Redirect to='/main'/>
          //ver como redirigir a window.location = `../qpid/src/pages/home.html`;
        }
      }
    } catch (error) {
      alert("Password and Repeated Password not matching");
    }
  };

  return (
    <div id="registerModal" className="modal">
      {/* Modal content */}
      <div className="modal-content">
        <span className="closeRegister">×</span>
        {/* Esto, usado con void(0)medios, no hace nada : no recargue, no navegue, no ejecute ningún código. */}
        <form
          onSubmit={handleSubmit}
          id="registerForm" /* action="../qpid/src/pages/home.html" */
        >
          <div className="container">
            <h1>Registrate</h1>
            <p>Por favor llena este formulario para crear tu cuenta</p>
            <hr />
            <label htmlFor="name">
              <b>Nombre</b>
            </label>
            <input
              type="text"
              placeholder="Nombre..."
              name="name"
              id="name"
              className="input-form"
              required
              value={name}
              onChange={handleNameOnChange}
            />
            <label htmlFor="age">
              <b>Edad</b>
            </label>
            <input
              id="age"
              type="number"
              name="age"
              placeholder="Ingrese su edad"
              className="input-form"
              required
              value={age}
              onChange={handleAgeOnChange}
            />
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="emailRegister"
              className="input-form"
              required
              value={email}
              onChange={handleEmailOnChange}
            />
            <label htmlFor="gender">
              <b>Me identifico como:</b>
            </label>
            <select
              name="gender"
              id="gender"
              className="input-form"
              onChange={handleGenderOnChange}
              value={gender}
            >
              <option value="Female">Mujer</option>
              <option value="Male">Hombre</option>
            </select>
            <label htmlFor="lookingFor">
              <b>Busco...</b>
            </label>
            <select
              name="lookingFor"
              id="lookingFor"
              className="input-form"
              onChange={handleLookingForOnChange}
              value={lookingFor}
            >
              <option value="Female">Mujer</option>
              <option value="Male">Hombre</option>
            </select>
            <label htmlFor="distance">
              <b>Radio de busqueda</b>
            </label>
            <input
              id="distance"
              type="number"
              name="distance"
              placeholder="Ingrese radio"
              className="input-form"
              value={distance}
              onChange={handleDistanceOnChange}
            />
            <label htmlFor="bio">
              <b>Sobre mi</b>
            </label>
            <textarea
              name="bio"
              id="bio"
              cols={30}
              rows={5}
              className="input-form"
              defaultValue={""}
              value={bio}
              onChange={handleBioOnchange}
            />
            <label htmlFor="image">
              <b>Foto</b>
            </label>
            <input
              id="image"
              type="text"
              name="image"
              placeholder="Ingrese una url de foto"
              className="input-form"
              required
              value={image}
              onChange={handleImageOnChange}
            />
            <label htmlFor>
              <b>Intereses</b>
            </label>
            <div className="tag">
              <input
                type="checkbox"
                id="Gastronomia"
                name="Gastronomia"
                defaultValue="Gastronomia"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Gastronomia">Gastronomia</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Instagram"
                name="Instagram"
                defaultValue="Instagram"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Instagram">Instagram</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Caminar"
                name="Caminar"
                defaultValue="Caminar"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Caminar">Caminar</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Escalada"
                name="Escalada"
                defaultValue="Escalada"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Escalada">Escalada</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Reposteria"
                name="Reposteria"
                defaultValue="Reposteria"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Reposteria">Reposteria</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Correr"
                name="Correr"
                defaultValue="Correr"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Correr">Correr</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Viajar"
                name="Viajar"
                defaultValue="Viajar"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Viajar">Viajar</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Intercambio de idiomas"
                name="Intercambio de idiomas"
                defaultValue="Intercambio de idiomas"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Intercambio de idiomas">
                Intercambio de idiomas
              </label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Bloggear"
                name="Bloggear"
                defaultValue="Bloggear"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Bloggear">Bloggear</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Peliculas"
                name="Peliculas"
                defaultValue="Peliculas"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Peliculas">Peliculas</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Golf"
                name="Golf"
                defaultValue="Golf"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Golf">Golf</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Dieta a base de plantas"
                name="Dieta a base de plantas"
                defaultValue="Dieta a base de plantas"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Dieta a base de plantas">
                Dieta a base de plantas
              </label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Fotografia"
                name="Fotografia"
                defaultValue="Fotografia"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Fotografia">Fotografia</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Leer"
                name="Leer"
                defaultValue="Leer"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Leer">Leer</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Surf"
                name="Surf"
                defaultValue="Surf"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Surf">Surf</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Escritura"
                name="Escritura"
                defaultValue="Escritura"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Escritura">Escritura</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Deportes"
                name="Deportes"
                defaultValue="Deportes"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Deportes">Deportes</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Atletismo"
                name="Atletismo"
                defaultValue="Atletismo"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Atletismo">Atletismo</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Cafe"
                name="Cafe"
                defaultValue="Cafe"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Cafe">Cafe</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Moda"
                name="Moda"
                defaultValue="Moda"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Moda">Moda</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Karaoke"
                name="Karaoke"
                defaultValue="Karaoke"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Karaoke">Karaoke</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Salir a tomar algo"
                name="Salir a tomar algo"
                defaultValue="Salir a tomar algo"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Salir a tomar algo">Salir a tomar algo</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Gamer"
                name="Gamer"
                defaultValue="Gamer"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Gamer">Gamer</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Astrologia"
                name="Astrologia"
                defaultValue="Astrologia"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Astrologia">Astrologia</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Espiritualidad"
                name="Espiritualidad"
                defaultValue="Espiritualidad"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Espiritualidad">Espiritualidad</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Cocinar"
                name="Cocinar"
                defaultValue="Cocinar"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Cocinar">Cocinar</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Futbol"
                name="Futbol"
                defaultValue="Futbol"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Futbol">Futbol</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Bailar"
                name="Bailar"
                defaultValue="Bailar"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Bailar">Bailar</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Jardineria"
                name="Jardineria"
                defaultValue="Jardineria"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Jardineria">Jardineria</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Arte"
                name="Arte"
                defaultValue="Arte"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Arte">Arte</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Manualidades"
                name="Manualidades"
                defaultValue="Manualidades"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Manualidades">Manualidades</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Politica"
                name="Politica"
                defaultValue="Politica"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Politica">Politica</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Ciclismo"
                name="Ciclismo"
                defaultValue="Ciclismo"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Ciclismo">Ciclismo</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Museo"
                name="Museo"
                defaultValue="Museo"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Museo">Museo</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Aire libre"
                name="Aire libre"
                defaultValue="Aire libre"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Aire libre">Aire libre</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Salir de compras"
                name="Salir de compras"
                defaultValue="Salir de compras"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Salir de compras">Salir de compras</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Salir de picnic"
                name="Salir de picnic"
                defaultValue="Salir de picnic"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Salir de picnic">Salir de picnic</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Comedia"
                name="Comedia"
                defaultValue="Comedia"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Comedia">Comedia</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Brunch"
                name="Brunch"
                defaultValue="Brunch"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Brunch">Brunch</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Musica"
                name="Musica"
                defaultValue="Musica"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Musica">Musica</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Netflix"
                name="Netflix"
                defaultValue="Netflix"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Netflix">Netflix</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Disney"
                name="Disney"
                defaultValue="Disney"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Disney">Disney</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Amante de los perros"
                name="Amante de los perros"
                defaultValue="Amante de los perros"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Amante de los perros">Amante de los perros</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Cerveza artesanal"
                name="Cerveza artesanal"
                defaultValue="Cerveza artesanal"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Cerveza artesanal">Cerveza artesanal</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Nadar"
                name="Nadar"
                defaultValue="Nadar"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Nadar">Nadar</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Te"
                name="Te"
                defaultValue="Te"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Te">Te</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Juegos de mesa"
                name="Juegos de mesa"
                defaultValue="Juegos de mesa"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Juegos de mesa">Juegos de mesa</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Trivia"
                name="Trivia"
                defaultValue="Trivia"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Trivia">Trivia</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Voluntariado"
                name="Voluntariado"
                defaultValue="Voluntariado"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Voluntariado">Voluntariado</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Ecologismo"
                name="Ecologismo"
                defaultValue="Ecologismo"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Ecologismo">Ecologismo</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Senderismo"
                name="Senderismo"
                defaultValue="Senderismo"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Senderismo">Senderismo</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Vino"
                name="Vino"
                defaultValue="Vino"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Vino">Vino</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Vloggear"
                name="Vloggear"
                defaultValue="Vloggear"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Vloggear">Vloggear</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Amante de los gatos"
                name="Amante de los gatos"
                defaultValue="Amante de los gatos"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Amante de los gatos">Amante de los gatos</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Entrenamiento"
                name="Entrenamiento"
                defaultValue="Entrenamiento"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Entrenamiento">Entrenamiento</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Yoga"
                name="Yoga"
                defaultValue="Yoga"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Yoga">Yoga</label>
            </div>
            <div className="tag">
              <input
                type="checkbox"
                id="Pesca"
                name="Pesca"
                defaultValue="Pesca"
                className="interestTag"
                onChange={handleInterestsOnChange}
              />
              <label htmlFor="Pesca">Pesca</label>
            </div>
          </div>
          <br />
          <label htmlFor="passwordRegister">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Ingresar Password"
            name="passwordRegister"
            id="passwordRegister"
            className="input-form"
            required
            value={password}
            onChange={handlePasswordOnChange}
          />
          <label htmlFor="password-repeatRegister">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="password-repeatRegister"
            id="password-repeatRegister"
            className="input-form"
            required
            value={passwordRepeat}
            onChange={handlePasswordRepeatOnChange}
          />
          <hr />
          <div className="conditions">
            <input
              id="terms"
              type="checkbox"
              name="terms"
              className="terms"
              required
            />
            <p>
              Estoy de acuerdo con los <a href="#">Terminos y condiciones</a>.
            </p>
          </div>
          <button type="submit" id="register" className="registerbtn">
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
