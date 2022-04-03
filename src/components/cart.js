import React from "react";

class Cart extends React.Component {
    render() {
      const {cartItems} = this.props
        return(
          <div className="cart">
             <h2>سبد خرید</h2>
             {
               cartItems.length === 0 ? "سبد خرید خالی است" :
               <div>
                 تعداد محصولات سبد خرید:{cartItems.length}
               </div>
             }
          </div>
        )
    }
}

export default Cart;