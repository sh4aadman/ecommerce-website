import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Account from "../pages/Account/Account";
import Collection from "../pages/Collection/Collection";
import Blog from "../pages/Blog/Blog";
import Product from "../pages/Product/Product";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import PrivateRoutes from "../components/Private/PrivateRoutes";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/collection',
                element: <Collection></Collection>,
                loader: () => fetch('/public/dates.json')
            },
            {
                path: '/product',
                element: <ProductGrid></ProductGrid>,
                loader: () => fetch('/public/dates.json')
            },
            {
                path: '/product/:id',
                element: <PrivateRoutes><Product></Product></PrivateRoutes>,
                loader: () => fetch('/public/dates.json')
            },
            {
                path: '/cart',
                element: <PrivateRoutes><Cart></Cart></PrivateRoutes>,
                loader: () => fetch('/public/dates.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/account',
                element: <PrivateRoutes><Account></Account></PrivateRoutes>
            }
        ]
    }
])

export default routes;