import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import App from './App';


// src/routes.tsx
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, 
        children: [
        {
            index: true, 
            element: <Home />,
        },
        {
            path: "about",
            element: <About />,
        },
        ],
    },
]);