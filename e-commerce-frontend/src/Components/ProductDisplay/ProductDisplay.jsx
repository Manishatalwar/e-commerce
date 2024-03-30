import React, { useContext, useState, useEffect } from "react";
import "./ProductDisplay.css";
import Swal from "sweetalert2";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { ShopContext } from "../../Context/ShopContext";
import Wishlist from "../WishList/WishList";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const savedWishlistItems = JSON.parse(localStorage.getItem("wishlistData"));
    if (savedWishlistItems) {
      setWishlistItems(savedWishlistItems);
      setIsInWishlist(savedWishlistItems.some(item => item.id === product.id));
    }
  }, [product.id]);

  const handleAddToCart = (productId) => {
    addToCart(productId);
    Swal.fire({
      icon: "success",
      title: "Product Added to Cart",
      showConfirmButton: false,
      timer: 1500
    });
  };

  const handleToggleWishlist = () => {
    const updatedIsInWishlist = !isInWishlist;
    setIsInWishlist(updatedIsInWishlist);

    const message = updatedIsInWishlist ? "Added to Wishlist" : "Removed from Wishlist";
  
    Swal.fire({
      icon: "success",
      title: message,
      showCancelButton: true,
      confirmButtonText: "Yes, Go to Wishlist",
      cancelButtonText: "No, Thanks",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedWishlistItems = updatedIsInWishlist 
          ? [...wishlistItems, product] 
          : wishlistItems.filter(item => item.id !== product.id);
        setWishlistItems(updatedWishlistItems);
        localStorage.setItem("wishlistData", JSON.stringify(updatedWishlistItems));
        redirectToWishlistPage();
      } else {
        // Revert the isInWishlist state if action is canceled
        setIsInWishlist(!updatedIsInWishlist);
      }
    });
  };

  const redirectToWishlistPage = () => {
    window.location.href = "/wishlist";
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <div>
          <button className={isInWishlist ? "wishlistBtn active" : "wishlistBtn"} onClick={handleToggleWishlist}>
            Add to Wishlist
          </button>
          <button className="addToCart" onClick={() => handleAddToCart(product.id)}>
            Add to Cart
          </button>
        </div>
        <p className="productdisplay-right-category"><span>Category :</span> Women, T-shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span> Modern, Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
