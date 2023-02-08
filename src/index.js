import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
          
import { Global } from './component/contexte/usercontext';
import { ProviderContext } from './component/contexte/usercontext';
import { ProductProvider } from './component/contexte/product';
import { CartProvider } from './component/contexte/cart';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProviderContext >
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </ProviderContext >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
