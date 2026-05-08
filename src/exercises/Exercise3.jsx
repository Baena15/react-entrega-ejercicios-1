import { useState, useRef } from 'react';
import ExerciseLayout from '../components/ExerciseLayout';

export default function Exercise3() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const addItem = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setItems(prev => [...prev, trimmed]);
    setText('');
    inputRef.current?.focus();
  };

  const removeItem = (index) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addItem();
  };

  return (
    <ExerciseLayout title="Lista Dinámica">
      <div className="exercise-box">
        <div className="flex-row">
          <input
            ref={inputRef}
            type="text"
            placeholder="Escribe algo..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="btn btn-primary" onClick={addItem}>
            Agregar
          </button>
        </div>
        <ul className="item-list">
          {items.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <button className="btn btn-danger btn-sm" onClick={() => removeItem(index)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </ExerciseLayout>
  );
}
