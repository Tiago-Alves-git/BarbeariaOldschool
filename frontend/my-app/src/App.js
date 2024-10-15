import { Route, Routes } from 'react-router-dom';
import './App.css';
import Consulta from './Pages/consulta';
import Barber from './Pages/barber';
import Menu from './Pages/menu';
import Agenda from './Pages/agenda';
import Home from './Pages/home';
import { useState } from 'react';

function App() {

  const [selectedBarber, setSelectedBarber] = useState(null);
  const [services, setServices] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/consulta" element={<Consulta />} />
      <Route path="/barber" element={<Barber  setSelectedBarber={setSelectedBarber} />} />
      <Route path="/menu" element={<Menu setServices={setServices} />} />
      <Route path="/agenda" element={<Agenda selectedBarber={selectedBarber} services={services} />} />
    </Routes>
  );
}

export default App;
