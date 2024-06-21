import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Corrected import from 'react-redux'
import { store } from './store/index';
import App from './App';
import 'bulma/css/bulma.css';
import '../src/styles.css'


const el = document.getElementById('root');
const root = createRoot(el);

root.render(
    <Provider store={store}> 
        <App />
    </Provider>
);
