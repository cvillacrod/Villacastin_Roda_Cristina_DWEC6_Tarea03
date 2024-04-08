import { useState,useEffect } from 'react'
import './App.css'
import './index.css'

import { TituloComponente } from './componentes/titulo.jsx';
import { BarraNavegacionComponente } from './componentes/barranavegacion.jsx';
import { CocktailListComponente } from './componentes/cocktaillist.jsx';
import { ImagenCocktailComponente } from './componentes/imagen.jsx';
import { LoadingComponente } from './componentes/loading.jsx';

//pagina principal, donde se ve una barra de navegacion, un titulo y el listado de todos los cockteles de la Api
function Home() {

  //guarda el estado de los cockteles
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);//estado para ver el estado de carga de la Api

  useEffect(() => {
    //función para obtener los cockteles desde la API
    const fetchCocktails = async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        if (!response.ok) {
          throw new Error('Failed to fetch cocktails');
        }
        const data = await response.json();
        setCocktails(data.drinks); //actualizar el estado con los cockteles obtenidos
        setIsLoading(false); //cambiar el estado de isLoading cuando se complete la solicitud
      } catch (error) {
        console.error('Error fetching cocktails:', error);
        setIsLoading(false); // cambiar el estado en caso de error
      }
    };

    fetchCocktails(); //llamar a la función para obtener los cockteles al cargar el componente
  }, []);

  console.log(cocktails);


  return (
    <div id="root">
        <nav className="navbar">
          <BarraNavegacionComponente titulo={`Cocktail DWEC-DB`} />
        </nav>
        <main>
          
            <section className="section">
              <TituloComponente titulo={`Cocktails`} />

              <div className="cocktails-center">
                  {isLoading ? ( //mientras se cargan los cockteles se ve el componente loading
                    <LoadingComponente />
                  ) : (
                    cocktails.map(cocktail => (
                      <article className="cocktail" key={cocktail.idDrink}>
                        <div className="img-container">
                          <ImagenCocktailComponente  strDrink={cocktail.strDrink} strDrinkThumb={cocktail.strDrinkThumb} />
                        </div>
                        <CocktailListComponente idDrink={cocktail.idDrink} strDrink={cocktail.strDrink} strGlass={cocktail.strGlass} strAlcoholic={cocktail.strAlcoholic} />
                      </article>
                    ))
                  )}
                    
                </div>

            </section>
        </main>
    </div>
  );
}

export default Home;