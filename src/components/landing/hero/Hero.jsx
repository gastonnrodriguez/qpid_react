import React from 'react'
import Video1 from '../../../assets/video/video1.mp4';
import Video2 from '../../../assets/video/video2.mp4';
import Video3 from '../../../assets/video/video3.mp4';
import Register from './Register';
import Login from './Login';

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
        <Login/>
        {/* Registro */}
        <Register/>
      </section>
    )
}

export default Hero
