import "bootstrap/dist/css/bootstrap.min.css"
function ProductCard() {
    return (
        <div className="ProductCard" >
            <img src="/logo192.png" className="card-img-top" style={{height: "200px", width:"100px"}}  />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
export default ProductCard;