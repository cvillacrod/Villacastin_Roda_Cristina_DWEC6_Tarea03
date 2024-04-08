
import { Link } from 'react-router-dom';

//componente que devuelve la barra de navegacion con los links a las rutas correspondientes
export const BarraNavegacionComponente = ({ titulo }) => {  
    return (              
        <nav className="navbar">
            <div className="nav-center">
                <ul className="nav-links"><span>{ titulo }</span></ul>
                <ul className="nav-links">
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
                </ul>
            </div>
         </nav>
     );
   }
  