import { useState, useMemo } from 'react';
import ExerciseLayout from '../components/ExerciseLayout';

const ANIMALS = [
  'Perro', 'Gato', 'Pez', 'Elefante', 'León',
  'Tigre', 'Jirafa', 'Mono', 'Águila', 'Tortuga',
  'Delfín', 'Caballo', 'Oso', 'Lobo', 'Zorro'
];

function normalize(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export default function Exercise4() {
  const [filter, setFilter] = useState('');

  const filtered = useMemo(() => {
    const term = normalize(filter);
    return ANIMALS.filter(item => normalize(item).includes(term));
  }, [filter]);

  return (
    <ExerciseLayout title="Filtro de Búsqueda en Tiempo Real">
      <div className="exercise-box">
        <input
          type="text"
          placeholder="Buscar en la lista..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <ul className="item-list" style={{ marginTop: '1.5rem' }}>
          {filtered.map((item, idx) => (
            <li key={idx} style={{ justifyContent: 'flex-start' }}>
              {item}
            </li>
          ))}
        </ul>
        {filtered.length === 0 && (
          <p className="text-center text-muted mt-2">No se encontraron coincidencias</p>
        )}
      </div>
    </ExerciseLayout>
  );
}
