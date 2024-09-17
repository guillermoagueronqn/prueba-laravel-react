import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// componentes
import LayoutPublic from './layouts/LayoutPublic';
import Login from './pageauth/Login';
import Register from './pageauth/Register';

import LayoutAdministrador from './layouts/LayoutAdministrador';
import LayoutCliente from './layouts/LayoutCliente';
import LayoutGestorComplejo from './layouts/LayoutGestorComplejo';
import PageHome from './pagepublic/PageHome';
import ProtectedRoutes from './pageauth/ProtectedRoutes';
import Panel from './pageadministrador/Panel';
import WelcomeCliente from './pagecliente/WelcomeCliente';
import WelcomeGestor from './pagegestorcomplejo/WelcomeGestor';
import Bienvenida from './pageadministrador/Bienvenida';

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
              <Route index element={<Panel/>}/>
              <Route path='/administrador/bienvenida' element={<Bienvenida/>} />
            </Route>

          {/* Rutas para clientes */}
            <Route path='/cliente' element={<LayoutCliente/>}>
              <Route index element={<WelcomeCliente/>}/>
            </Route>

          {/* Rutas para gestores de complejo */}
            <Route path='/gestorComplejo' element={<LayoutGestorComplejo/>}>
              <Route index element={<WelcomeGestor/>}/>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
