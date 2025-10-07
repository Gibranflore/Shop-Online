import { createBrowserRouter, Navigate } from "react-router";

import { HomePage } from "./Shop/Pages/Home/homePage";
import { ProductPage } from "./Shop/Product/productPage";
import { GenderPage } from "./Shop/Pages/Gender/gender";
import { ShopLayout } from "./Shop/Layout/ShopLayout";

import { LoginPage } from "./Auth/Login/loginPage";
import { RegisterPage } from "./Auth/Register/registerPage";

import { DashboardPage } from "./Admin/Pages/Dashboard/dashboardPage";
import { AdminProductsPage } from "./Admin/Pages/Products/adminProductsPage";
import { AdminProductPage } from "./Admin/Pages/Product/adminProductPage";
import { lazy } from "react";
import { AdminLayout } from "./Admin/Layout/adminLayout";

const LayouthAuth = lazy(() => import("./Auth/Layout/layouthAuth"))


export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <ShopLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: 'product/:idSlug',
                element: <ProductPage/>
            },
            {
                path: 'gender/:gender',
                element: <GenderPage/>
            }
        ],
    },
    {
        path: '/auth',
        element: <LayouthAuth/>,
        children: [
            {
                index: true,
                element: <Navigate to={"auth/login"}/>,
            },
            {
                path: 'login',
                element: <LoginPage/>,
            },
            {
                path: 'register',
                element: <RegisterPage/>
            },
            
        ],
    },
    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
            {
                index: true,
                element: <DashboardPage/>,
            },
            {
                path: 'products',
                element: <AdminProductsPage/>,
            },
            {
                path: 'products/:id',
                element: <AdminProductPage/>,
            },
        ]
    },
    {
        path: '*',
        element: <Navigate to="/"/>
    }
])

