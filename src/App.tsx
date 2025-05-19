
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Services from '@/pages/Services';
import ServiceDetail from '@/pages/ServiceDetail';
import Team from '@/pages/Team';
import Contact from '@/pages/Contact';
import Appointment from '@/pages/Appointment';
import NotFound from '@/pages/NotFound';
import FloatingAppointmentButton from '@/components/FloatingAppointmentButton';
import { Toaster } from '@/components/ui/toaster';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Floating appointment button on all pages except appointment page */}
      <Routes>
        <Route path="/appointment" element={null} />
        <Route path="*" element={<FloatingAppointmentButton />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
