import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { CountryPage } from './pages/CountryPage';

// Placeholder components
function Destinations() {
  return <div className="p-8 text-center text-2xl font-bold text-[#1A4B8C]">All Destinations View - Coming Soon</div>;
}

function About() {
  return <div className="p-8 text-center text-2xl font-bold text-[#1A4B8C]">About Us - Coming Soon</div>;
}

function Contact() {
  return <div className="p-8 text-center text-2xl font-bold text-[#1A4B8C]">Contact Us - Coming Soon</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="destination/:id" element={<CountryPage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
