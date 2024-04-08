
import './index.css'
import React from 'react';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';//para extraer el parametro idDrink
import { Link } from 'react-router-dom';

import { TituloComponente } from './componentes/titulo.jsx';
import { BarraNavegacionComponente } from './componentes/barranavegacion.jsx';
import { DetallesComponente } from './componentes/detalles.jsx';
function Cocktail() {
  
  const { idDrink } = useParams();
  const [cocktailDetails, setCocktailDetails] = useState(null);

  const mensajeCocktailError = "No disponemos de ese cocktail en la Carta. Por favor, elige alguno del menú.";

  
  useEffect(() => {
    //solicitud a la API utilizando el idDrink
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
      .then(response => response.json())
      .then(data => {
        // guardamos los detalles del cockstail
        setCocktailDetails(data.drinks ? data.drinks[0] : null);  
      })
      .catch(error => {
        console.error('Error fetching cocktail details:', error);     
      });
  }, [idDrink]);

  //console.log(cocktailDetails);

  function getIngredients(cocktailDetails) {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) { // la api tiene como maximo 15 ingredientes
      const ingredient = cocktailDetails[`strIngredient${i}`];
      if (ingredient) 
      {
        ingredients.push(ingredient);
      } 
      else 
      {
        break; 
      }
    }
    return ingredients;
  }

  
    return (

      <div id="root">

          <nav className="navbar">
              <BarraNavegacionComponente titulo={`Cocktail DWEC-DB`} />
          </nav>

          <section className="section cocktail-section">
                <Link className="btn btn-primary" to="/">back home</Link>
                  
                <section className="section cocktail-section">
                    
                    {cocktailDetails ? (
                        <React.Fragment>
                          <TituloComponente titulo={cocktailDetails.strDrink} />
                          <DetallesComponente
                            strDrink={cocktailDetails.strDrink}
                            strCategory={cocktailDetails.strCategory}
                            strAlcoholic={cocktailDetails.strAlcoholic}
                            strGlass={cocktailDetails.strGlass}
                            strInstructions={cocktailDetails.strInstructions}
                            strDrinkThumb={cocktailDetails.strDrinkThumb}
                            ingredients={getIngredients(cocktailDetails)}
                          />
                        </React.Fragment>
                      ) : (                      
                        <TituloComponente titulo={mensajeCocktailError} /> //  si cocktailDetails  es null

                      )}

                </section>

          </section>
  </div>


    );
  }
  
  export default Cocktail;

