import {useState} from 'react';
import initialState from '../initialState';

function useInitialState() {
    const [state, setState] = useState(initialState);

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
        console.log(...state.cart)
    }

    const removeFromCart = (payload, indexToRemove) => {
        setState({
            ...state,
            cart: state.cart.filter((_item, indexCurrent) => indexCurrent !== indexToRemove),
        });
    };

    const addToBuyer = payload => {
      setState({
        ...state,
        buyer: [...state.buyer, payload]
      })
    };
    
    const addNewOrder = payload => {
      setState({
        ...state,
        orders: [...state.orders, payload]
      })
    }

    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        state
    };
};

export default useInitialState;


/* ---------------------------------------- */


/* ------------------------------------------------------------------ */

/* import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/Checkout.css';
import AppContext from '../context/AppContext';


function Checkout() {
  const {state, removefromCart} = useContext(AppContext);
  const { cart } = state;  

  const handleRemove = product => () => {
    removefromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de pedidos</h3> : <h3>Sin pedidos</h3>}

        {cart.map((item) => (
          <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>{item.title}</h4>
            <span>{item.price}</span>
          </div>
          <button type="button" onClick={handleRemove(item)} >
            <i className="fas fa-trash-alt" />
          </button>
        </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar Pedido</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Checkout; */