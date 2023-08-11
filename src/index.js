import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hello from './Hello';
import Mom from './Mom'
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(
  <React.StrictMode>
    <Hello greeting={'Hello React Ninja'}/>
    <Mom nameOfMom={'Stacy'} />
  </React.StrictMode>
);

// ReactDOM.render(<Hello greeting={'Hello' + ' React' + ' Ninja'}/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
