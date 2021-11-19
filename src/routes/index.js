import React from 'react';
import { Route, Routes } from 'react-router';
import AddProductPage from '../pages/AddProductPage';
import CartPage from '../pages/CartPage';
import MainPage from '../pages/MainPage';
import PaymentPage from '../pages/PaymentPage';
import Product from '../pages/Product';
import AuthPage from '../pages/AuthPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/paymentForm" element={<PaymentPage />} />
            <Route path="/addProduct" element={<AddProductPage />} />
            <Route path="/register" element={<AuthPage />} />
        </Routes>
    );
};

export default AppRoutes;
