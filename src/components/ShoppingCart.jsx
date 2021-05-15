function ShoppingCart({ products }) {
    //Función para calcular la suma de los productos puestos en el carrito
    function calculate() {
        let result = 0;
        //Iteramos el precio del producto y lo sumamos
        for (let product of products) {result += product.price;}
        return result;
    }

    return (
        <div className="shopping_cart">
            <ul className="list-group">
                {products.map(product => (
                    <li className="list-group-item">
                        <p className="list-group-item list-group-item-primary">{product.name}</p>
                        <p className="list-group-item list-group-item-success">{product.price}€</p>
                    </li>
                ))}
            </ul>
            <p className="h5">Total Productos ({products.length}): {calculate()}€</p>
        </div>
    );
}

export default ShoppingCart;

