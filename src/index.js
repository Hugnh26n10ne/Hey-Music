import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles/GlobalStyles';
import { Profiler } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Profiler>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </Profiler>
    </React.StrictMode>,
);

reportWebVitals();
