
//componente que devuelve el cocktail para formas la lista de todos
import { Link } from 'react-router-dom';

export const CocktailListComponente = ({ idDrink,strDrink,strGlass,strAlcoholic }) => {  
  const detallesUrl = `/cocktail/${idDrink}`;
  return (              
        <div className="cocktail-footer">
            <h3>{strDrink}</h3>
            <h4>{strGlass}</h4>
            <p>{strAlcoholic}</p>
            
            <Link className="btn btn-primary btn-details" to={detallesUrl}>details</Link>
        </div>
   );
 }


