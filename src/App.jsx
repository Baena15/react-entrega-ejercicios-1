import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Exercise1 from './exercises/Exercise1';
import Exercise2 from './exercises/Exercise2';
import Exercise3 from './exercises/Exercise3';
import Exercise4 from './exercises/Exercise4';
import Exercise5 from './exercises/Exercise5';
import Exercise6 from './exercises/Exercise6';
import Exercise7 from './exercises/Exercise7';
import Exercise8 from './exercises/Exercise8';
import Exercise9 from './exercises/Exercise9';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ejercicio/1" element={<Exercise1 />} />
        <Route path="/ejercicio/2" element={<Exercise2 />} />
        <Route path="/ejercicio/3" element={<Exercise3 />} />
        <Route path="/ejercicio/4" element={<Exercise4 />} />
        <Route path="/ejercicio/5" element={<Exercise5 />} />
        <Route path="/ejercicio/6" element={<Exercise6 />} />
        <Route path="/ejercicio/7" element={<Exercise7 />} />
        <Route path="/ejercicio/8" element={<Exercise8 />} />
        <Route path="/ejercicio/9" element={<Exercise9 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
