import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'

import store from './store'
ReactDOM.render(
    <div className={'container-fluid'} id={'rootContainer'}>
        <Provider store={store}>
        <App />
    </Provider>
    </div>

    , document.getElementById('root'));
registerServiceWorker();
