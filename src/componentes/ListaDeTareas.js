import React, {useState} from "react";
import TareaFormulario from './TareaFormulario'
import '../hojas-de-estilo/ListaDeTareas.css'
import Tarea from "./Tarea";

//En la seccion de arriba, vemos que podemos importar varios elementos de react en la misma sentencia.

// Acá vemos lo que son los "fragmentos", que son etiquetas vacias que sirven para sustituir los div que albergan todo el codigo de un componente. la sintaxis es <> </>

function ListaDeTareas(){
  //Aquí añadimos estado, usando el hook useState.
  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea =>{
    console.log(tarea)
    if (tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();

      const tareasActualizadas = [tarea,...tareas];
      setTareas(tareasActualizadas);
    }
  }

  const eliminarTarea = id =>{
    const tareasActualizadas = tareas.filter(tarea=> tarea.id !== id);
    setTareas(tareasActualizadas);
  }

  const completarTarea = id =>{
    const tareasActualizadas = tareas.map(tarea =>{
      if (tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    })
    setTareas(tareasActualizadas);
  }



  return(
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto = {tarea.texto}
            completada = {tarea.completada}
            completarTarea = {completarTarea}
            eliminarTarea = {eliminarTarea}
          />)
        }
      </div>


    </>  
  );
}

export default ListaDeTareas;