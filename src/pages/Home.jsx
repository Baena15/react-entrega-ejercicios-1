import { Link } from 'react-router-dom';

const exercises = [
  {
    number: '01',
    title: 'Cambiador de Color de Fondo',
    desc: 'Eventos y manipulación de estilos del DOM. Genera un color aleatorio al hacer clic.',
    path: '/ejercicio/1',
  },
  {
    number: '02',
    title: 'Contador de Clics',
    desc: 'Manejo de eventos y actualización dinámica del contenido del DOM.',
    path: '/ejercicio/2',
  },
  {
    number: '03',
    title: 'Lista Dinámica',
    desc: 'Creación, eliminación y manipulación de elementos del DOM en tiempo real.',
    path: '/ejercicio/3',
  },
  {
    number: '04',
    title: 'Filtro de Búsqueda en Tiempo Real',
    desc: 'Interacción entre eventos del DOM y lógica de filtrado de listas.',
    path: '/ejercicio/4',
  },
  {
    number: '05',
    title: 'Calculadora Sencilla',
    desc: 'Manipulación de formularios, eventos y lógica básica con validaciones.',
    path: '/ejercicio/5',
  },
  {
    number: '06',
    title: 'Temporizador',
    desc: 'Inicio, pausa y reinicio con manejo de temporización y actualización del DOM.',
    path: '/ejercicio/6',
  },
  {
    number: '07',
    title: 'Generador de Contraseñas',
    desc: 'Generación de cadenas aleatorias con letras, números y caracteres especiales.',
    path: '/ejercicio/7',
  },
  {
    number: '08',
    title: 'Contador de Palabras y Caracteres',
    desc: 'Eventos en tiempo real y manipulación avanzada del DOM.',
    path: '/ejercicio/8',
  },
  {
    number: '09',
    title: 'Lista de Tareas con LocalStorage',
    desc: 'Persistencia de datos en el navegador usando localStorage.',
    path: '/ejercicio/9',
  },
];

export default function Home() {
  return (
    <div className="container">
      <header className="page-header">
        <h1>React Entrega de Ejercicios 1</h1>
        <p>Relación de ejercicios prácticos con React</p>
      </header>

      <main className="cards-grid">
        {exercises.map((ex) => (
          <Link to={ex.path} key={ex.number} className="card">
            <div className="card-number">{ex.number}</div>
            <h2>{ex.title}</h2>
            <p>{ex.desc}</p>
          </Link>
        ))}
      </main>

      <footer className="page-footer">
        <p>Entrega de ejercicios — React</p>
      </footer>
    </div>
  );
}
