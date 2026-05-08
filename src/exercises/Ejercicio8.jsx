import { useState, useMemo } from 'react';
import ExerciseLayout from '../components/ExerciseLayout';

export default function Exercise8() {
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const chars = text.replace(/\s/g, '').length;
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    return { chars, words };
  }, [text]);

  return (
    <ExerciseLayout title="Contador de Palabras y Caracteres">
      <div className="exercise-box">
        <textarea
          placeholder="Escribe aquí un párrafo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex-row" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
          <div className="result-box" style={{ flex: 1 }}>
            <div className="result-label">Palabras</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#22d3ee' }}>
              {stats.words}
            </div>
          </div>
          <div className="result-box" style={{ flex: 1 }}>
            <div className="result-label">Caracteres</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#818cf8' }}>
              {stats.chars}
            </div>
          </div>
        </div>
      </div>
    </ExerciseLayout>
  );
}
