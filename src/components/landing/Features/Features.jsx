import Cel1 from '../../../assets/images/celu1.png';
import Cel2 from '../../../assets/images/celu2.png';
import Cel3 from '../../../assets/images/celu3.png';
import React from "react";

function Features() {
  return (
    <main>
      <section className="features">
        <div className="info1">
          <p>
            <span>La voz como arma de seducción</span>
            <br />
            Optamos por que los audios sean los que nos describan, los que nos
            cuenten una historia, los que nos capten la atención. Si esto
            sucede, podremos entablar una conversación.
          </p>
          <img src={Cel3} alt="" />
        </div>
        <div className="info2">
          <img src={Cel2} alt="" />
          <p>
            <span>Como en la vida real</span>
            <br />
            La voz también es una herramienta de seducción, como hace años, como
            lo es ahora.
          </p>
        </div>
        <div className="info3">
          <p>
            <span>Amor sin fronteras</span> <br />
            QPID tiene claro que el amor no tiene identidad, por eso alentamos a
            la comunidad LGBT a sentirse libre en nuestra plataforma
          </p>
          <img src={Cel1} alt="" />
        </div>
      </section>
    </main>
  );
}

export default Features;
