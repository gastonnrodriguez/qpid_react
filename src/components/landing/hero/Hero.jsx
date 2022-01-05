import Video1 from '../../../assets/video/video1.mp4';
import Video2 from '../../../assets/video/video2.mp4';
import Video3 from '../../../assets/video/video3.mp4';
import React from 'react'

const Hero = () => {

  //todo random video
    return (
        <section className="home">
        <video id="background" className="video-slide active" src={Video1} autoPlay muted loop />
        <div className="content active">
          <h1>MILES DE PERSONAS CON VOZ</h1>
          <h2>
            <span>Conoce, seduce, enamórate</span>
          </h2>
          <p>
            Creemos que la conexión entre las personas existe más allá de la
            imagen, QPID te ofrece trascender las barreras de lo casual, te
            propone a alguien especial.
          </p>
          <button id="registerTrigger">Registrarse</button>
          <button id="loginTrigger">Iniciar sesión</button>
        </div>
        <div className="media-icons">
          <a href="#"><i className="fab fa-facebook-f" /></a>
          <a href="#"><i className="fab fa-instagram" /></a>
          <a href="#"><i className="fab fa-twitter" /></a>
        </div>
        {/* Login */}
        <div id="loginModal" className="modal">
          {/* Modal content */}
          <div className="modal-content">
            <span className="closeLogin">×</span>
            <form id="loginForm">
              <div className="container">
                <h1>Iniciar sesion</h1>
                <hr />
                <label htmlFor="mailLogin"><b>Email</b></label>
                <input id="mailLogin" type="email" name="mailLogin" placeholder="Ingrese su correo" className="input-form" />
                <label htmlFor="passwordLogin"><b>Password</b></label>
                <input id="passwordLogin" type="password" name="passwordLogin" placeholder="Ingrese su contraseña" className="input-form" />
                <button id="login" className="loginbtn">Login!</button>
              </div>
            </form>
          </div>
        </div>
        {/* Registro */}
        <div id="registerModal" className="modal">
          {/* Modal content */}
          <div className="modal-content">
            <span className="closeRegister">×</span>
            {/* Esto, usado con void(0)medios, no hace nada : no recargue, no navegue, no ejecute ningún código. */}
            <form id="registerForm" action="../qpid/src/pages/home.html">
              <div className="container">
                <h1>Registrate</h1>
                <p>Por favor llena este formulario para crear tu cuenta</p>
                <hr />
                <label htmlFor="name"><b>Nombre</b></label>
                <input type="text" placeholder="Nombre..." name="name" id="name" className="input-form" required />
                <label htmlFor="age"><b>Edad</b></label>
                <input id="age" type="number" name="age" placeholder="Ingrese su edad" className="input-form" required />
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="emailRegister" className="input-form" required />
                <label htmlFor="gender"><b>Me identifico como:</b></label>
                <select name="gender" id="gender" className="input-form">
                  <option value="Female">Mujer</option>
                  <option value="Male">Hombre</option>
                </select>
                <label htmlFor="lookingFor"><b>Busco...</b></label>
                <select name="lookingFor" id="lookingFor" className="input-form">
                  <option value="Female">Mujer</option>
                  <option value="Male">Hombre</option>
                </select>
                <label htmlFor="distance"><b>Radio de busqueda</b></label>
                <input id="distance" type="number" name="distance" placeholder="Ingrese radio" className="input-form" />
                <label htmlFor="bio"><b>Sobre mi</b></label>
                <textarea name="bio" id="bio" cols={30} rows={5} className="input-form" defaultValue={""} />
                <label htmlFor="image"><b>Foto</b></label>
                <input id="image" type="text" name="image" placeholder="Ingrese una url de foto" className="input-form" />
                <label htmlFor><b>Intereses</b></label>
                <div className="tag">
                  <input type="checkbox" id="Gastronomia" name="Gastronomia" defaultValue="Gastronomia" className="interestTag" />
                  <label htmlFor="Gastronomia">Gastronomia</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Instagram" name="Instagram" defaultValue="Instagram" className="interestTag" />
                  <label htmlFor="Instagram">Instagram</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Caminar" name="Caminar" defaultValue="Caminar" className="interestTag" />
                  <label htmlFor="Caminar">Caminar</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Escalada" name="Escalada" defaultValue="Escalada" className="interestTag" />
                  <label htmlFor="Escalada">Escalada</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Reposteria" name="Reposteria" defaultValue="Reposteria" className="interestTag" />
                  <label htmlFor="Reposteria">Reposteria</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Correr" name="Correr" defaultValue="Correr" className="interestTag" />
                  <label htmlFor="Correr">Correr</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Viajar" name="Viajar" defaultValue="Viajar" className="interestTag" />
                  <label htmlFor="Viajar">Viajar</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Intercambio de idiomas" name="Intercambio de idiomas" defaultValue="Intercambio de idiomas" className="interestTag" />
                  <label htmlFor="Intercambio de idiomas">Intercambio de idiomas</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Bloggear" name="Bloggear" defaultValue="Bloggear" className="interestTag" />
                  <label htmlFor="Bloggear">Bloggear</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Peliculas" name="Peliculas" defaultValue="Peliculas" className="interestTag" />
                  <label htmlFor="Peliculas">Peliculas</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Golf" name="Golf" defaultValue="Golf" className="interestTag" />
                  <label htmlFor="Golf">Golf</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Dieta a base de plantas" name="Dieta a base de plantas" defaultValue="Dieta a base de plantas" className="interestTag" />
                  <label htmlFor="Dieta a base de plantas">Dieta a base de plantas</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Fotografia" name="Fotografia" defaultValue="Fotografia" className="interestTag" />
                  <label htmlFor="Fotografia">Fotografia</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Leer" name="Leer" defaultValue="Leer" className="interestTag" />
                  <label htmlFor="Leer">Leer</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Surf" name="Surf" defaultValue="Surf" className="interestTag" />
                  <label htmlFor="Surf">Surf</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Escritura" name="Escritura" defaultValue="Escritura" className="interestTag" />
                  <label htmlFor="Escritura">Escritura</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Deportes" name="Deportes" defaultValue="Deportes" className="interestTag" />
                  <label htmlFor="Deportes">Deportes</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Atletismo" name="Atletismo" defaultValue="Atletismo" className="interestTag" />
                  <label htmlFor="Atletismo">Atletismo</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Cafe" name="Cafe" defaultValue="Cafe" className="interestTag" />
                  <label htmlFor="Cafe">Cafe</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Moda" name="Moda" defaultValue="Moda" className="interestTag" />
                  <label htmlFor="Moda">Moda</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Karaoke" name="Karaoke" defaultValue="Karaoke" className="interestTag" />
                  <label htmlFor="Karaoke">Karaoke</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Salir a tomar algo" name="Salir a tomar algo" defaultValue="Salir a tomar algo" className="interestTag" />
                  <label htmlFor="Salir a tomar algo">Salir a tomar algo</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Gamer" name="Gamer" defaultValue="Gamer" className="interestTag" />
                  <label htmlFor="Gamer">Gamer</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Astrologia" name="Astrologia" defaultValue="Astrologia" className="interestTag" />
                  <label htmlFor="Astrologia">Astrologia</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Espiritualidad" name="Espiritualidad" defaultValue="Espiritualidad" className="interestTag" />
                  <label htmlFor="Espiritualidad">Espiritualidad</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Cocinar" name="Cocinar" defaultValue="Cocinar" className="interestTag" />
                  <label htmlFor="Cocinar">Cocinar</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Futbol" name="Futbol" defaultValue="Futbol" className="interestTag" />
                  <label htmlFor="Futbol">Futbol</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Bailar" name="Bailar" defaultValue="Bailar" className="interestTag" />
                  <label htmlFor="Bailar">Bailar</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Jardineria" name="Jardineria" defaultValue="Jardineria" className="interestTag" />
                  <label htmlFor="Jardineria">Jardineria</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Arte" name="Arte" defaultValue="Arte" className="interestTag" />
                  <label htmlFor="Arte">Arte</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Manualidades" name="Manualidades" defaultValue="Manualidades" className="interestTag" />
                  <label htmlFor="Manualidades">Manualidades</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Politica" name="Politica" defaultValue="Politica" className="interestTag" />
                  <label htmlFor="Politica">Politica</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Ciclismo" name="Ciclismo" defaultValue="Ciclismo" className="interestTag" />
                  <label htmlFor="Ciclismo">Ciclismo</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Museo" name="Museo" defaultValue="Museo" className="interestTag" />
                  <label htmlFor="Museo">Museo</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Aire libre" name="Aire libre" defaultValue="Aire libre" className="interestTag" />
                  <label htmlFor="Aire libre">Aire libre</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Salir de compras" name="Salir de compras" defaultValue="Salir de compras" className="interestTag" />
                  <label htmlFor="Salir de compras">Salir de compras</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Salir de picnic" name="Salir de picnic" defaultValue="Salir de picnic" className="interestTag" />
                  <label htmlFor="Salir de picnic">Salir de picnic</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Comedia" name="Comedia" defaultValue="Comedia" className="interestTag" />
                  <label htmlFor="Comedia">Comedia</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Brunch" name="Brunch" defaultValue="Brunch" className="interestTag" />
                  <label htmlFor="Brunch">Brunch</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Musica" name="Musica" defaultValue="Musica" className="interestTag" />
                  <label htmlFor="Musica">Musica</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Netflix" name="Netflix" defaultValue="Netflix" className="interestTag" />
                  <label htmlFor="Netflix">Netflix</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Disney" name="Disney" defaultValue="Disney" className="interestTag" />
                  <label htmlFor="Disney">Disney</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Amante de los perros" name="Amante de los perros" defaultValue="Amante de los perros" className="interestTag" />
                  <label htmlFor="Amante de los perros">Amante de los perros</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Cerveza artesanal" name="Cerveza artesanal" defaultValue="Cerveza artesanal" className="interestTag" />
                  <label htmlFor="Cerveza artesanal">Cerveza artesanal</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Nadar" name="Nadar" defaultValue="Nadar" className="interestTag" />
                  <label htmlFor="Nadar">Nadar</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Te" name="Te" defaultValue="Te" className="interestTag" />
                  <label htmlFor="Te">Te</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Juegos de mesa" name="Juegos de mesa" defaultValue="Juegos de mesa" className="interestTag" />
                  <label htmlFor="Juegos de mesa">Juegos de mesa</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Trivia" name="Trivia" defaultValue="Trivia" className="interestTag" />
                  <label htmlFor="Trivia">Trivia</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Voluntariado" name="Voluntariado" defaultValue="Voluntariado" className="interestTag" />
                  <label htmlFor="Voluntariado">Voluntariado</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Ecologismo" name="Ecologismo" defaultValue="Ecologismo" className="interestTag" />
                  <label htmlFor="Ecologismo">Ecologismo</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Senderismo" name="Senderismo" defaultValue="Senderismo" className="interestTag" />
                  <label htmlFor="Senderismo">Senderismo</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Vino" name="Vino" defaultValue="Vino" className="interestTag" />
                  <label htmlFor="Vino">Vino</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Vloggear" name="Vloggear" defaultValue="Vloggear" className="interestTag" />
                  <label htmlFor="Vloggear">Vloggear</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Amante de los gatos" name="Amante de los gatos" defaultValue="Amante de los gatos" className="interestTag" />
                  <label htmlFor="Amante de los gatos">Amante de los gatos</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Entrenamiento" name="Entrenamiento" defaultValue="Entrenamiento" className="interestTag" />
                  <label htmlFor="Entrenamiento">Entrenamiento</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Yoga" name="Yoga" defaultValue="Yoga" className="interestTag" />
                  <label htmlFor="Yoga">Yoga</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="Pesca" name="Pesca" defaultValue="Pesca" className="interestTag" />
                  <label htmlFor="Pesca">Pesca</label>
                </div></div><br />
              <label htmlFor="passwordRegister"><b>Password</b></label>
              <input type="password" placeholder="Ingresar Password" name="passwordRegister" id="passwordRegister" className="input-form" required />
              <label htmlFor="password-repeatRegister"><b>Repeat Password</b></label>
              <input type="password" placeholder="Repeat Password" name="password-repeatRegister" id="password-repeatRegister" className="input-form" required />
              <hr />
              <div className="conditions">
                <input id="terms" type="checkbox" name="terms" className="terms" required /><p>Estoy de acuerdo con los <a href="#">Terminos y condiciones</a>.</p>
              </div>
              <button type="submit" id="register" className="registerbtn">Crear cuenta</button>
            </form></div>
        </div>
      </section>
    )
}

export default Hero
