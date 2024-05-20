import './App.css';
import { Formulario } from './inicio-sesion/components/Formulario'
import Destacado from './componentes/Destacado';

function App() {
  return (
    <div className="App">
      <div class="centrado">
  <section class="menu-seccion"> 
    <nav id="menu-simple" class="menu-simple menu">
      <ul>
        <li><a href="#">Principal</a></li>
        <li><a href="#">Cursos</a></li>
        <li><a href="#">Tutoriales</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Noticias</a></li>
        <li><a href="#">Contacto</a></li>
        <button onClick={ './inicio-sesion/components/Formulario'}>Iniciar sesion</button>

      </ul>
    </nav>
  </section>
</div>
      <div>
      <h1>
        Restaurante Augurio 
      </h1>
      <h2> Platillos destacados en su forma más pura
      </h2>
      <div className='cuadros-destacado'>
      <Destacado 
      nombre='Chile en nogada'
      precio='$450.00'
      descripcion='Chile poblano relleno de carne de res y puerco, mezclados con fruta: plátano, manzana, pera, durazno, bañados con una salsa de nuez de castilla, queso de cabra, leche y jerez.'
      imagen='chile'/>
      <Destacado
      nombre='Pulpo en adobo de chile ancho'
      precio='$380.00'
      descripcion='Pulpo adobado a las brasas, acompañado de un adobo de chile ancho con vegetales rostizados y condimentados con vinagreta del miel. 
      '
      imagen='pulpo'/>
      <Destacado
      nombre='Ensalada campesina'
      precio='$120'
      descripcion='Mix de lechugas, espinaca baby, tomates cherry, cebolla morada, queso de vaca, pera asada, cacahuate garapiñado aderezada con una vinagreta de pepita.'
      imagen='ensalada'
      />
      </div>
      </div>
    </div>
  );
}

export default App;
