import { Link } from 'react-router-dom';

export default function ExerciseLayout({ title, children }) {
  return (
    <div className="exercise-container">
      <header className="exercise-header">
        <Link to="/" className="back-btn">&#8592; Volver</Link>
        <h1 className="exercise-title">{title}</h1>
      </header>
      {children}
    </div>
  );
}
