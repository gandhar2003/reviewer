import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  CategoryPage,
  ProductReview,
  Compare,
  Login,
  NotFound
} from '../pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="/review/:productId" element={<ProductReview />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;