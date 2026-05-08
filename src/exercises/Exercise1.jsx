import { useState, useEffect } from 'react';
import ExerciseLayout from '../components/ExerciseLayout';

function getRandomColor() {
  const hex = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return '#' + hex;
}

export default function Exercise1() {
  const [color, setColor] = useState('#0f172a');

  useEffect(() => {
    document.body.style.background = color;
    return () => {
      document.body.style.background = '';
    };
  }, [color]);

  const handleChangeColor = () => {
    setColor(getRandomColor());
  };

  return (
    <ExerciseLayout title="Cambiador de Color de Fondo">
      <div className="exercise-box text-center">
        <p className="text-muted mb-2">Haz clic en el botón para generar un color aleatorio</p>
        <button className="btn btn-primary" onClick={handleChangeColor}>
          Cambiar color
        </button>
        <div
          className="result-box mt-2"
          style={{ fontFamily: 'monospace' }}
        >
          {color}
        </div>
      </div>
    </ExerciseLayout>
  );
}
