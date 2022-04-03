import React from "react";
import './App.css'
import Products from "./components/Products";
import './components/Products.css'
import Cart from "./components/Cart";
import './components/Cart.css'

class App extends React.Component {
  render() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <Products />
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