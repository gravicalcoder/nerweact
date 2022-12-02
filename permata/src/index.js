import App from './App.js'
import { createRoot } from 'react-dom/client'
import './style.css'
const root = createRoot(document.querySelector('#root'))
const toto = 'Tektonik'
const tito = 'ajah'
root.render(

<div>

    <h1 style={ { color: 'coral', backgroundColor: 'floralwhite' } } className="title">Hello { toto }</h1>
  <p>Some<br />content { Math.random() }</p>
  <h1 className="cute-paragraph" >kamana { tito }</h1>
    <App clickersCount={ 10 }> don't know why my dream comes</App>


 
</div>

)



/*
import React from 'react';
import {createroot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<h1>Hello World!</h1>);


/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

*/

/* old -2

 <h1 style={ { color: 'coral', backgroundColor: 'floralwhite' } } className="title">Hello { toto }</h1>
  <p>Some<br />content { Math.random() }</p>
  <h1 className="cute-paragraph" >kamana { tito }</h1>

  */
