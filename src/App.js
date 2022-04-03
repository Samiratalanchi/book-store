import React from "react";
import './App.css'
import Products from "./components/Products";
import './components/Products.css'
import Cart from "./components/Cart";
import './components/Cart.css'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { products: [] }
  }

  componentWillMount() {
    fetch("http://localhost:8000/products/")
    .then(res => res.json())
    .then(data => this.setState({
      products: data
    }))
  }

  render() {
    return(
      <div className="container-fluid" >
        <div className="row">
          <div className="col-md-8">
            <Products products={this.state.products} />
          </div>
          <div className="col-md-4">
            <Cart />
          </div>
        </div>
      </div>
    )
  }
}
export default App;