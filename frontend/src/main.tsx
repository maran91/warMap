import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import{QueryClient, QueryClientProvider} from '@tanstack/react-query';
import 'primereact/resources/themes/lara-dark-teal/theme.css';  // Import theme CSS
import 'primereact/resources/primereact.min.css';          // Import PrimeReact core CSS
import 'primeicons/primeicons.css';                        // Import PrimeIcons

const queryClient = new QueryClient({defaultOptions:{queries: {staleTime: 60000, gcTime: 60 * 60 * 1000}}});
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>,
);
