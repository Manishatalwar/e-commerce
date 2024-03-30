import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./WishList.css";

const WishList = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const wishlistData = JSON.parse(localStorage.getItem("wishlistData"));
    if (wishlistData) {
      setWishlistItems(wishlistData);
    }
  }, []);

  const handleRemoveFromWishlist = (id) => {
    const updatedWishlistItems = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updatedWishlistItems);
    localStorage.setItem("wishlistData", JSON.stringify(updatedWishlistItems));
  };

  return (
    <div className="wishlist">
      <h2>Wishlist</h2>
      <div className="wishlist-items">
        {wishlistItems.length === 0 ? (
          <p className="wishlist-empty-message">No items in wishlist</p>
        ) : (
          wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <button onClick={() => handleRemoveFromWishlist(item.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
      <Link to="/shopall" className="shopall-link">Go to Shop All</Link>
    </div>
  );
};

export default WishList;
