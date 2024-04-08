import './index.css'

import { TituloComponente } from './componentes/titulo.jsx';
import { BarraNavegacionComponente } from './componentes/barranavegacion.jsx';

function About() {
    return (
      <div id="root">
        <nav className="navbar">
          <BarraNavegacionComponente titulo={`Cocktail DWEC-DB`} />
        </nav>
        <main>
          <section className="section about-section">
            <TituloComponente titulo={`About Us`} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae architecto qui adipisci in
                officiis, aperiam sequi atque perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur
                nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione hic aspernatur error blanditiis?
              </p>
          </section>
        </main>
      </div>
    );
  }
  
  export default About;


