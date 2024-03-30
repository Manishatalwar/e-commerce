import React, { useState } from "react";

const ShippingInformation = ({ onNext }) => {
  const [formData, setFormData] = useState({ fullName: "", address: "", city: "" });
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

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
      formIsValid = false;
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Please enter your address';
      formIsValid = false;
    }
    if (!formData.city.trim()) {
      newErrors.city = 'Please enter your city';
      formIsValid = false;
    }

    if (formIsValid) {
      onNext(formData); // Proceed to the next step
    } else {
      setErrors(newErrors); // Set errors object with validation messages
    }
  };

  return (
    <div style={{marginTop:"60px"}}>
    <div style={styles.card}>
      <h2  style={{marginBottom:"30px"}}>Shipping Information</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            style={styles.input}
          />
          {errors.fullName && <span style={styles.error}>{errors.fullName}</span>}
        </div>
        <div style={styles.formGroup}>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            style={styles.input}
          />
          {errors.address && <span style={styles.error}>{errors.address}</span>}
        </div>
        <div style={styles.formGroup}>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            style={styles.input}
          />
          {errors.city && <span style={styles.error}>{errors.city}</span>}
        </div>
        <button type="submit" style={styles.button}>Next</button>
      </form>
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
  formGroup: {
    marginBottom: '30px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  error: {
    color: '#ff0000',
    fontSize: '14px',
    marginTop: '5px',
  },
  button: {
    display: 'block',
    width: '100%',
    height: '50px',
    borderRadius: '25px',
    marginTop: '20px',
    backgroundColor: '#e31010',
    color: 'white',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    border: 'none',
  },
};

export default ShippingInformation;
