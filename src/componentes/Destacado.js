import react from 'react';
import App from '../App';
import '../hojas-de-estilo/Destacado.css';

function Destacado(props){
  return (
    <div className='contenedor-destacado'>
      <img 
      className='imagen-destacado'
      src={require(`../imagenes/platillo-${props.imagen}.jpeg`)}
      alt='Fotografia de chile en nogada'/>

      <div className='contenedor-texto-destacado'>
        <p className='nombre-platillo'>{props.nombre} </p>
        <p className='precio-platillo'> {props.precio}</p>
        <p className='texto-platillo'>{props.descripcion}</p>
      </div>
    </div>

  );     
}
export default Destacado