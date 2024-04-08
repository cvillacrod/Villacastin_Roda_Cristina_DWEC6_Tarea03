import { TituloComponente } from './componentes/titulo.jsx';
import { BarraNavegacionComponente } from './componentes/barranavegacion.jsx';
import './index.css'

//ser redidrige aqui y muestra este error si ha intentado entrar en una pagina que no existe
function Error() {
  const mensajeError="Oups!Lo sentimos pero la pagina que busca no esta disponible";

    return (
      
      <div id="root">
      <nav className="navbar">
              <BarraNavegacionComponente titulo={`Cocktail DWEC-DB`} />
          </nav>
      <main>
        <section className="section about-section">
          <TituloComponente titulo={mensajeError} />
        </section>
      </main>
  </div>
    );
  }
  
  export default Error;


