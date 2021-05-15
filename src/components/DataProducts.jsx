function DataProducts(props) {
    return (
        <div className="product">
            <h5 className="card-title">{props.name}</h5>
           <div className="container px-4">
            <img  src={props.image} alt="" />
            <div className="row">
                <p id="price">{props.price} € </p>
                <button
                    className="btn btn-primary"
                    onClick={props.productClick}>
                    Comprar
                </button>
            </div>
           </div>
        </div>
    );
}

export default DataProducts;