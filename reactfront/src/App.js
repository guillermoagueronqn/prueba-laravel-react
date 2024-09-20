import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// componentes

// PUBLIC
import LayoutPublic from './layouts/LayoutPublic';
import Login from './pageauth/Login';
import Register from './pageauth/Register';
import PageHome from './pagepublic/PageHome';

// PRIVATE
import ProtectedRoutes from './pageauth/ProtectedRoutes';

// ROL ADMIN
import LayoutAdministrador from './layouts/LayoutAdministrador';
import Panel from './pageadministrador/Panel';
import Bienvenida from './pageadministrador/Bienvenida';

// ROL CLIENTE
import LayoutCliente from './layouts/LayoutCliente';
import WelcomeCliente from './pagecliente/WelcomeCliente';

// ROL GESTOR DE COMPLEJOS
import LayoutGestorComplejo from './layouts/LayoutGestorComplejo';
import WelcomeGestor from './pagegestorcomplejo/WelcomeGestor';
import MiComplejo from './pagegestorcomplejo/MiComplejo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Rutas Públicas */} 
          <Route path='/' element={<LayoutPublic/>}>
            <Route index element={<PageHome/>}/>
            
            {/* Rutas de autenticación */}
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Route>

          {/* Rutas Privadas */}
          <Route element={<ProtectedRoutes/>}>

          {/* Rutas para administradores */}
            <Route path='/administrador' element={<LayoutAdministrador/>}>
              <Route index element={<Bienvenida/>}/>
              <Route path='panel' element={<Panel/>} />
            </Route>

          {/* Rutas para clientes */}
            <Route path='/cliente' element={<LayoutCliente/>}>
              <Route index element={<WelcomeCliente/>}/>
            </Route>

          {/* Rutas para gestores de complejo */}
            <Route path='/gestorComplejo' element={<LayoutGestorComplejo/>}>
              <Route index element={<WelcomeGestor/>}/>
              <Route path='miComplejo' element={<MiComplejo/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;