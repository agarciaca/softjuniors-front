import logo from './logo.svg';
import './styles/App.css';
import favico from './img/hoa.ico';
import img1 from './img/j.jpg';
import img2 from './img/l.jpg'

function App() {
  return (
    <div className="App">
      <header>
        <ul class="navbar">
          <li><a class=""> <img src={favico} alt="imagen" class="logo"/></a></li>
          <li><button class="button tercerButton">Inicio</button></li>
          <li><button class="button cuartoButton">Listas</button></li>
          <li>
              <div class="buscar">
                  <input placeholder="Buscar" type="text" />
                  <i class="fas fa-search"></i>
              </div>
            
          </li>
          <li><button class=" button mainButton">Registrarse</button></li>
          <li><button class=" button segundoButton">Iniciar Sesion</button></li>
        </ul>
      </header>
      <main>
          <section>
              <h1>Mas Vendidos</h1>
              <ul class="bredimagen">
                  <li class="bredCar">
                      <div class="imagenes">
                        <img src={img1} alt="peluche" />
                      </div>
                      <span class="titulodeImagen">Peluche</span>
                  </li>
                  <li class="bredCar">
                      <div class="imagenes">
                          <img src={img2} alt="big combo" />
                      </div>
                      <span class="titulodeImagen">Big Combo</span>
                  </li>
              </ul>
          </section>
          <section>
          </section>
      </main>
      <footer>
          <h4>SFJuniors</h4>
          <p>Somos un grupo de desarrollo con ganas de aprender</p>
          <p>Gracias por visitar nuestra pagina</p>
      </footer>      
       
   </div>
  );
}



export default App;
