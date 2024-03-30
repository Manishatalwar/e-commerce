import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { products, cartItems, removeFromCart, getTotalCartAmount, increaseQuantity, deleteFromCart } = useContext(ShopContext);

  const cartItemsList = products.map((product) => {
    const quantity = cartItems[product.id] || 0;
    if (quantity > 0) {
      return (
        <div key={product.id}>
          <div className="cartitems-format-main cartitems-format">
            <img className="cartitems-product-icon" src={product.image} alt="" />
            <p cartitems-product-title>{product.name}</p>
            <p>${product.new_price}</p>
            <div className="cartitems-quantity-control">
              <button className="cartitems-quantity-btn" onClick={() => { removeFromCart(product.id) }} >-</button>
              <span className="cartitems-quantity">{quantity}</span>
              <button className="cartitems-quantity-btn" onClick={() => increaseQuantity(product.id)}>+</button>
            </div>
            <p>${product.new_price * quantity}</p>
            <img className="cartitems-remove-icon"  onClick={() => { deleteFromCart(product.id) }}  src={cross_icon} alt="" />
          </div>
          <hr />
        </div>
      );
    }
    return null;
  });

  return (
    <div className="cartitems">
      {Object.values(cartItems).some((quantity) => quantity > 0) ? (
        <>
          <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
          {cartItemsList}
          <div className="cartitems-down">
            <div className="cartitems-total">
              <h1>Cart Totals</h1>
              <div>
                <div className="cartitems-total-item">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                  <p>Shipping Fee</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                  <h3>Total</h3>
                  <h3>${getTotalCartAmount()}</h3>
                </div>
              </div>
              <Link to="/checkout"> {/* Link to the checkout page */}
                <button className="Pro-btn">PROCEED TO CHECKOUT</button>
              </Link>
            </div>
            <div className="cartitems-promocode">
              <p>If you have a promo code, Enter it here</p>
              <div className="cartitems-promobox">
                <input type="text" placeholder="promo code" />
                <button >Submit</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="cart-empty-msg">Cart is empty</p>
      )}
    </div>
  );
};

export default CartItems;
