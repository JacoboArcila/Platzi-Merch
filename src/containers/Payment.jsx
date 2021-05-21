import React, { useContext } from 'react';
import '../styles/components/Payment.css';
import {PayPalButton} from 'react-paypal-button';
import AppContext from '../context/AppContext';


function Payment() {
  const {state, addNewOrder} = useContext(AppContext);
  const {cart, buyer} = state;

  const paypalOptions = {
    clientId: "AamJtBQe_q0VshgBEMFpnOMvn2ssn32hOmlJxGtbbvSvmp7V6m32n7yF2ZEGftPbTrql8sa-vhmt4XgD",
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) => {
    if(data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder);
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map((item) => (
          <div key={item.title} className="Payment-item">
            <div className="payment-elemtent">
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton 
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={data = console.log(data)}
            onPaymentError={error = console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  )
}

export default Payment;
