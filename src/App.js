import './App.css';
import {useState} from 'react';
import {products} from './dataJson/Products';
import ProductsList from './components/ProductsList';
import ShoppingCart from './components/ShoppingCart';


function App() {

  const [buyProduct, setBuyProduct] = useState([]);

  //Función para obtener productos y hacer listado
  function getProduct(parProduct) {
    const copyProducts = [...buyProduct];
    copyProducts.push(parProduct);
    setBuyProduct(copyProducts);
  }
  //Función para filtrar por la categoria
  function filterCat() {
      return products.map(products => products.category )
    }
  //Se establece el filtrado de la lista por categorias y almacenar los objetos 
  const category = [...new Set(filterCat(products))]
  
  return (
    <div className="App">
      <div className="col-8">
              {category.map(category => (
              <ProductsList
                key={category.id}
                //nombre del listado por categorias
                nameCategory={category.toUpperCase()}
                //Generamos los productos filtrando por su atributo categoria
                products={products.filter(product => product.category === category)}
                buyProduct={getProduct}
              />
            ))}
      </div>
      <div className="col-6">
          <ShoppingCart 
            //Metemos el producto seleccionado el el carrito según sus criterios(nombre y precio)
            products={buyProduct} />
      </div>
    </div>
      
        
      
    
  );
}

export default App;
