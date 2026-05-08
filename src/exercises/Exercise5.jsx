import { useState } from 'react';
import ExerciseLayout from '../components/ExerciseLayout';

export default function Exercise5() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('—');
  const [error, setError] = useState('');

  const calculate = (op) => {
    setError('');
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setError('Por favor, introduce ambos números.');
      setResult('—');
      return;
    }

    let res;
    switch (op) {
      case 'add':
        res = a + b;
        break;
      case 'subtract':
        res = a - b;
        break;
      case 'multiply':
        res = a * b;
        break;
      case 'divide':
        if (b === 0) {
          setError('No se puede dividir entre cero.');
          setResult('—');
          return;
        }
        res = a / b;
        break;
      default:
        return;
    }

    res = Math.round(res * 1e12) / 1e12;
    setResult(res);
  };

  const ops = [
    { label: 'Sumar', op: 'add' },
    { label: 'Restar', op: 'subtract' },
    { label: 'Multiplicar', op: 'multiply' },
    { label: 'Dividir', op: 'divide' },
  ];

  return (
    <ExerciseLayout title="Calculadora Sencilla">
      <div className="exercise-box">
        <div className="flex-col">
          <input
            type="number"
            placeholder="Primer número"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <input
            type="number"
            placeholder="Segundo número"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
          <div className="flex-row" style={{ justifyContent: 'center' }}>
            {ops.map(({ label, op }) => (
              <button key={op} className="btn btn-primary" onClick={() => calculate(op)}>
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="result-box mt-2">Resultado: {result}</div>
        {error && (
          <p className="text-center text-danger mt-1">{error}</p>
        )}
      </div>
    </ExerciseLayout>
  );
}
