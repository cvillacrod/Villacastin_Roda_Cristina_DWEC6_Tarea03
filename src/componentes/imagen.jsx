//componente que devuelve la imagen  del cocktail
export const ImagenCocktailComponente = ({ strDrink,strDrinkThumb }) => {  

    return (              
          
             <img src={strDrinkThumb} alt={strDrink} />

     );
   }
  
