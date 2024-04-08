//componente que devuelve los detalles del cocktail
export const DetallesComponente = ({ strDrink,strCategory,strAlcoholic, strGlass,strInstructions,strDrinkThumb,ingredients }) => {  

   return (              
          
    <div className="drink">
    <img src={strDrinkThumb} alt="A1" className="drink-detail"/>
      <div className="drink-info">
          <p><span className="drink-data">name :</span> {strDrink}</p>
          <p><span className="drink-data">category :</span> {strCategory}</p>
          <p><span className="drink-data">info :</span> {strAlcoholic}</p>
          <p><span className="drink-data">glass :</span> {strGlass}</p>
          <p><span className="drink-data">instructons :</span> {strInstructions}</p>
          <p><span className="drink-data">ingredients :</span>

          {ingredients && ingredients.map((ingredient, index) => (
            <span key={index}>{ingredient}</span>
          ))}
          </p>

      </div>
  </div>
      
     );
   }
 


            
