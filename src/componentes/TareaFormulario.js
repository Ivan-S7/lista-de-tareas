import React, {useState} from "react";
import '../hojas-de-estilo/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario (props){
  //Acá lógica. Tambien trabajaremos con estados acá, por lo que estamos trabjando con hooks aquí también.
  const [input, setInput] = useState('');

  
  const manejarCambio = e =>{
    setInput(e.target.value);
  }
  
  const manejarEnvio = e =>{
    e.preventDefault();
    
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(tareaNueva);
  }


  return(
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type='text'
        placeholder='write a task'
        name="texto"
        onChange={manejarCambio}
      />

      <button className="tarea-boton">
        Add task
      </button>

    </form>
  );
}

export default TareaFormulario;