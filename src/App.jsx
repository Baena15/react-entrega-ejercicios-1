import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ejercicio1 from './exercises/Ejercicio1';
import Ejercicio2 from './exercises/Ejercicio2';
import Ejercicio3 from './exercises/Ejercicio3';
import Ejercicio4 from './exercises/Ejercicio4';
import Ejercicio5 from './exercises/Ejercicio5';
import Ejercicio6 from './exercises/Ejercicio6';
import Ejercicio7 from './exercises/Ejercicio7';
import Ejercicio8 from './exercises/Ejercicio8';
import Ejercicio9 from './exercises/Ejercicio9';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ejercicio/1" element={<Ejercicio1 />} />
        <Route path="/ejercicio/2" element={<Ejercicio2 />} />
        <Route path="/ejercicio/3" element={<Ejercicio3 />} />
        <Route path="/ejercicio/4" element={<Ejercicio4 />} />
        <Route path="/ejercicio/5" element={<Ejercicio5 />} />
        <Route path="/ejercicio/6" element={<Ejercicio6 />} />
        <Route path="/ejercicio/7" element={<Ejercicio7 />} />
        <Route path="/ejercicio/8" element={<Ejercicio8 />} />
        <Route path="/ejercicio/9" element={<Ejercicio9 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
