<h1>DWEC06 - Tarea 03</h1

<h3>ENUNCIADO DE LA TAREA:</h3>


Vamos a realizar una página donde podamos ver la carta de cocktails que disponemos en nuestro nuevo local de moda, el Marga&Rita. Esta página será una SPA en la que tendremos que implementar unas rutas concretas:

●	La página inicial siempre será la de HOME. Aquí podremos ver todos los cocktails en formato reducido.
●	Tenemos una página donde veremos información acerca de nosotros (ABOUT), los nuevos dueños del local (podéis poner lo que queráis, en el ejemplo hay texto “lorem ipsum”).

 
●	Cuando pulsemos en el enlace para ir a detalles de los cocktails, iremos a una página donde se verán más en detalle los ingredientes y las instrucciones. La página se llamará COCKTAIL pero tendrá que ser dinámica ya que cada cocktail tendrá su página de detalles.


Si por el un casual, algún usuario cambia la URL a mano y no coincide con ninguna de nuestras rutas/páginas se mostrará un mensaje como el siguiente con un enlace para volver a la página de HOME.
 
Lo mismo va ocurrir cuando intentemos acceder a algún cocktail que pongamos manualmente en la URL.

ACLARACIONES EL ENUNCIADO:

●	La API para obtención de datos: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=
●	Los enlaces los tendréis que hacer con  ReactRouter.

●	Necesitaremos en total 4 páginas: 
○	HOME, para ver toda la lista de cocktails.
○	ABOUT, para ver información sobre los dueños y demás.
○	ERROR, para mostrar cuando no se encuentra la página solicitada.
○	COCTAIL, para ver la información detallada de cada cocktail.

●	Necesitaremos en total 4 componentes:
○	NAVBAR, la barra de navegación para el título y los enlaces a diferentes páginas. Estará visible siempre en cualquier página en la que estemos.
○	COCKTAIL-LIST, para ver/mostrar todos los cocktails en formato pequeño.
○	COCKTAIL, se utilizará para crear cada una de las miniaturas de los cocktails.
○	LOADING, este componente se visualiza mientras estemos pidiendo los datos de los cocktails. Mientras se esté haciendo la petición de datos a la API (muy poco tiempo) se visualiza un div que tiene una clase especial que renderiza un pequeño efecto. El código para ese componente es este:
