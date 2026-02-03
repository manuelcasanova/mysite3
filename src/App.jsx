import { Routes, Route } from 'react-router-dom';

import './App.css'

import Home from './components/Home';
import Footer from './components/Footer'

import Hospitality from './components/Hospitality';
import SpanishTeacher from './components/SpanishTeacher';
import Beyond from './components/Beyond';


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hospitality" element={<Hospitality />} />
        <Route path="/spanish-teacher" element={<SpanishTeacher />} />
        <Route path="/beyond" element={<Beyond />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
