import React from 'react';
import ReactDOM from 'react-dom';
import Assigment from './Assigment';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';




ReactDOM.render(<>  <h1 className="heading"> Current Time in Charsadda  </h1>
<Assigment/>
</>
      , document.getElementById("root"));
        serviceWorker.unregister();