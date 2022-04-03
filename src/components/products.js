import React from "react";

class Products extends React.Component {
    render() {
        const productItems = this.props.products.map(product =>
            <div className="col-md-4 text-center product" key={product.id}>
                <div>
                    <img src={`./products/${product.id}.jpg`}></img>
                </div>
                <div>
                    <p>
                        {product.title}
                    </p>
                    <p className="price">
                        {product.price}
                    </p>
                    <button className="btn btn-primary">
                        افزودن به سبد خرید
                    </button>
                </div>
            </div>
            )
        return(
          <div className="row">
              {productItems}
          </div>
        )
    }
}

export default Products;