import React from 'react';
import '../styles/components/Payment.css';

function Payment() {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        <div className="Payment-button">
          Boton del pago con paypal
        </div>
      </div>
      <div />
    </div>
  )
}

export default Payment;
