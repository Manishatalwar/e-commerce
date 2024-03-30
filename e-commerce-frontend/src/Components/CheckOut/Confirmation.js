import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Confirmation = ({ shippingInfo, paymentInfo, onConfirm }) => {
  return (
    <div style={{ marginTop: '60px' }}>
      <div style={styles.card}>
        <h2>Order Confirmation</h2>
        <div style={styles.section}>
          <h3 style={{ marginBottom: '15px',marginTop: '10px' }}>Shipping Information:</h3>
          <p><strong>Full Name:</strong> {shippingInfo?.fullName}</p>
          <p><strong>Address:</strong> {shippingInfo?.address}</p>
          <p><strong>City:</strong> {shippingInfo?.city}</p>
          {/* Display other shipping details */}
        </div>
        <div style={styles.section}>
          <h3 style={{ marginBottom: '15px' ,marginTop: '10px'}}>Payment Details:</h3>
          <p><strong>Card Number:</strong> {paymentInfo?.cardNumber}</p>
          <p><strong>Expiry Date:</strong> {paymentInfo?.expiryDate}</p>
          {/* Display other payment details */}
        </div>
        <p style={styles.thankYouMessage}>Thank you for your order!</p>
      <Link to="/" style={styles.link}>Back to Home</Link>
      </div>
    </div>
  );
};

const styles = {
  card: {
    marginTop: '60px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto',
  },
  section: {
    marginBottom: '20px',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
    width: '260px',
    height: '50px',
    borderRadius: '25px',
    marginTop: '20px',
    backgroundColor: '#e31010',
    color: 'white',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    margin: '30px auto 0',
    border: 'none',
  },
  thankYouMessage: {
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#4CAF50', // Green color for "Thank you" message
  },
  link: {
    display: 'block',
    textAlign: 'center',
    marginTop: '20px',
    textDecoration: 'none',
    color: '#e31010',
    border: '1px solid #e31010', // Add border to the link for emphasis
    borderRadius: '5px',
    padding: '10px',
    transition: 'background-color 0.3s ease',
  },
  
};


export default Confirmation;
