import { useState } from 'react';
import ExerciseLayout from '../components/ExerciseLayout';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';

function generatePassword(length) {
  let password = '';
  const array = new Uint32Array(length);
  window.crypto.getRandomValues(array);

  for (let i = 0; i < length; i++) {
    password += CHARS[array[i] % CHARS.length];
  }
  return password;
}

export default function Exercise7() {
  const [length, setLength] = useState('');
  const [password, setPassword] = useState('—');
  const [error, setError] = useState('');

  const handleGenerate = () => {
    setError('');
    const len = parseInt(length, 10);

    if (isNaN(len) || length.trim() === '') {
      setError('Introduce una longitud válida.');
      setPassword('—');
      return;
    }

    if (len < 4) {
      setError('La longitud debe ser mayor o igual a 4.');
      setPassword('—');
      return;
    }

    setPassword(generatePassword(len));
  };

  return (
    <ExerciseLayout title="Generador de Contraseñas">
      <div className="exercise-box">
        <div className="flex-col">
          <input
            type="number"
            placeholder="Longitud de la contraseña (mínimo 4)"
            min="1"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleGenerate}>
            Generar contraseña
          </button>
        </div>
        <div
          className="result-box mt-2"
          style={{ fontFamily: 'monospace', fontSize: '1.3rem', wordBreak: 'break-all' }}
        >
          {password}
        </div>
        {error && (
          <p className="text-center mt-1" style={{ color: '#ef4444' }}>{error}</p>
        )}
      </div>
    </ExerciseLayout>
  );
}
