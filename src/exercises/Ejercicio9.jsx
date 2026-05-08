import { useState, useEffect, useRef } from 'react';
import ExerciseLayout from '../components/ExerciseLayout';

const STORAGE_KEY = 'todo_tasks';

function loadTasks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export default function Exercise9() {
  const [tasks, setTasks] = useState(loadTasks);
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTasks(prev => [...prev, { text: trimmed, completed: false }]);
    setText('');
    inputRef.current?.focus();
  };

  const toggleTask = (index) => {
    setTasks(prev =>
      prev.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (index) => {
    setTasks(prev => prev.filter((_, i) => i !== index));
  };

  const clearCompleted = () => {
    setTasks(prev => prev.filter(t => !t.completed));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTask();
  };

  return (
    <ExerciseLayout title="Lista de Tareas">
      <div className="exercise-box">
        <div className="flex-row">
          <input
            ref={inputRef}
            type="text"
            placeholder="Nueva tarea..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="btn btn-primary" onClick={addTask}>
            Agregar
          </button>
        </div>

        <ul className="item-list">
          {tasks.map((task, index) => (
            <li key={index} style={{ gap: '0.75rem' }}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(index)}
                style={{
                  width: '20px',
                  height: '20px',
                  cursor: 'pointer',
                  accentColor: '#22d3ee',
                }}
              />
              <span
                style={{
                  flex: 1,
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? '#64748b' : '#f1f5f9',
                }}
              >
                {task.text}
              </span>
              <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>

        {tasks.some(t => t.completed) && (
          <div className="text-center mt-2">
            <button className="btn btn-danger btn-sm" onClick={clearCompleted}>
              Limpiar tareas completadas
            </button>
          </div>
        )}
      </div>
    </ExerciseLayout>
  );
}
