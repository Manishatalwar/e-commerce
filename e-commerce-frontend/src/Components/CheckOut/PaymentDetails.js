import React, { useState } from "react";

const PaymentDetails = ({ onPrevious, onNext }) => {
  const [formData, setFormData] = useState({ cardNumber: "", expiryDate: "", cvv: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error message when the user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    let formIsValid = true;
    const newErrors = {};

    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = 'Please enter your card number';
      formIsValid = false;
    } else if (formData.cardNumber.trim().length !== 10) {
      newErrors.cardNumber = 'Card number must be 10 digits';
      formIsValid = false;
    }

    if (!formData.expiryDate.trim()) {
      newErrors.expiryDate = 'Please enter expiry date';
      formIsValid = false;
    }

    if (!formData.cvv.trim()) {
      newErrors.cvv = 'Please enter CVV';
      formIsValid = false;
    } else if (formData.cvv.trim().length !== 3) {
      newErrors.cvv = 'CVV must be 3 digits';
      formIsValid = false;
    }

    if (formIsValid) {
      onNext(formData); // Proceed to the next step
    } else {
      setErrors(newErrors); // Set errors object with validation messages
    }
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <div style={styles.card}>
        <h2 style={{ marginBottom: "30px" }}>Payment Details</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="Card Number"
              style={styles.input}
            />
            {errors.cardNumber && <span style={styles.error}>{errors.cardNumber}</span>}
          </div>
          <div style={styles.formGroup}>
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              placeholder="Expiry Date"
              style={styles.input}
            />
            {errors.expiryDate && <span style={styles.error}>{errors.expiryDate}</span>}
          </div>
          <div style={styles.formGroup}>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="CVV"
              style={styles.input}
            />
            {errors.cvv && <span style={styles.error}>{errors.cvv}</span>}
          </div>
          <button type="button" onClick={onPrevious} style={styles.button}>
            Previous
          </button>
          <button type="submit" style={styles.button}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  card: {
    marginTop: "60px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "0 auto",
  },
  formGroup: {
    marginBottom: "30px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  error: {
    color: "#ff0000",
    fontSize: "14px",
    marginTop: "5px",
  },
  button: {
    display: "block",
    width: "100%",
    height: "50px",
    borderRadius: "25px",
    marginTop: "20px",
    backgroundColor: "#e31010",
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    border: "none",
  },
};

export default PaymentDetails;
