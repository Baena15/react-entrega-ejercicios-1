import { useState } from 'react';
import ExerciseLayout from '../components/ExerciseLayout';

export default function Exercise2() {
  const [count, setCount] = useState(0);

  return (
    <ExerciseLayout title="Contador de Clics">
      <div className="exercise-box text-center">
        <p className="text-muted mb-2">Cada clic aumenta el contador</p>
        <button className="btn btn-primary" onClick={() => setCount(c => c + 1)}>
          Contar clics
        </button>
        <div className="result-box mt-2">Clics: {count}</div>
      </div>
    </ExerciseLayout>
  );
}
