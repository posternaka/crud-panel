import { StrictMode } from 'react';
import { BrowserRouter  } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bulma/css/bulma.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL} >
            <App />
        </BrowserRouter>
    </StrictMode>
);
