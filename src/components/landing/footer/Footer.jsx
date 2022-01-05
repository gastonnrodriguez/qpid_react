import appstoreBadge from '../../../assets/images/appstore.svg';
import playstoreBadge from '../../../assets/images/playstore.svg';
import React from "react";
import("./Footer.css");

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="legal">
        <h3>Legal</h3>
        <ul>
          <li>
            <a href="#">Seguridad</a>
          </li>
          <li>
            <a href="#">Datos Personales</a>
          </li>
          <li>
            <a href="#">Terminos y condiciones</a>
          </li>
        </ul>
      </div>
      <div className="info">
        <h3>Mas información</h3>
        <ul>
          <li>
            <a href="#">Preguntas frecuentes</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
      <div className="download">
        <h3>Descargala aqui</h3>
        <a href="#">
          <img
            src={appstoreBadge}
            alt="appstore download badge"
            id="appstore"
            className="download_bage"
          />
        </a>
        <a href="#">
          <img
            src={playstoreBadge}
            alt="playstore download badge"
            id="playstore"
            className="download_bage"
          />
        </a>
      </div>
      <div className="credits">Copyright 2021 Gaston</div>
    </footer>
  );
};

export default Footer;
