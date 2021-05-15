import DataProducts from "./DataProducts";

function Productslist({products, nameCategory, buyProduct}) {
    //Función hacer click y poner el producto en el carrito
    function clickProduct(parProduct) {
        return buyProduct(parProduct);
    }
    //Almacenamos todos los productos con su respectiva información
    const product =
        products.map(products => {
            return (<DataProducts key={products.id}{...products} productClick={() => clickProduct(products)}
            />)
        })
    
    return (
        <>  
            <h2 className="text-center" id='nameCategory'>{nameCategory}</h2>
            <div className="listProducts">{product}</div>
        </>
    );  
}

export default Productslist;