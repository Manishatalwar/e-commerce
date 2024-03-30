import React, { useState } from "react";
import ShippingInformation from "./ShippingInformation";
import PaymentDetails from "./PaymentDetails";
import Confirmation from "./Confirmation";

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});
console.log("step",step)
  const handleShippingNext = (data) => {
    setShippingInfo(data);
    setStep(2);
  };

  const handlePaymentNext = (data) => {
    setPaymentInfo(data);
    setStep(3);
  };

  const handleConfirmOrder = () => {
    // Handle confirming order (e.g., sending data to backend)
    console.log("Order confirmed!");
  };

  return (
    <div>
      {step === 1 && <ShippingInformation onNext={handleShippingNext} />}
      {step === 2 && <PaymentDetails onPrevious={() => setStep(1)} onNext={handlePaymentNext} />}
      {step === 3 && <Confirmation shippingInfo={shippingInfo} paymentInfo={paymentInfo} onConfirm={handleConfirmOrder} />}
    </div>
  );
};

export default CheckoutPage;
