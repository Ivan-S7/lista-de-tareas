import './App.css';
import FreeCodeCamp_logo from './imagenes/FreeCodeCamp_logo.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tarea'>
      <div className='freeCodeCamp-logo-contenedor' >
        <img src={FreeCodeCamp_logo} className='freeCodeCamp-logo' alt='Logo de FreeCodeCamp'  />

      </div>
      
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
        

      </div>

    </div>
  );
}

export default App;
