import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import MRoute from './Component/routes/index';
import * as serviceWorker from './serviceWorker';


// antd
import 'antd/dist/antd.css';

ReactDOM.render(
    // <App />,
    <MRoute />, 
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
