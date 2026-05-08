import { useState, useEffect, useRef } from 'react';
import ExerciseLayout from '../components/ExerciseLayout';

function formatTime(totalSeconds) {
  const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const s = String(totalSeconds % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

export default function Exercise6() {
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const startTimer = () => {
    if (!isRunning) setIsRunning(true);
  };

  const pauseTimer = () => {
    if (isRunning) setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setElapsed(0);
  };

  return (
    <ExerciseLayout title="Temporizador">
      <div className="exercise-box text-center">
        <div className="timer-display">{formatTime(elapsed)}</div>
        <div className="flex-row" style={{ justifyContent: 'center' }}>
          <button className="btn btn-success" onClick={startTimer}>Iniciar</button>
          <button className="btn btn-warning" onClick={pauseTimer}>Pausar</button>
          <button className="btn btn-secondary" onClick={resetTimer}>Reiniciar</button>
        </div>
      </div>
    </ExerciseLayout>
  );
}
