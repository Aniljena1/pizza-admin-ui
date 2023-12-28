import { createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Categories from './pages/categories';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: '/pages',
        element: <Categories />,
    }
]);