import React from 'react';
import initialState from '../initialState';
import Products from '../components/Products';

function Home() {
  return (
    <div>
      <h1>Hola</h1>
      <Products products={initialState.products} />
    </div>
  );
}

export default Home;
