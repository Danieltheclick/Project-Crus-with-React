import Nav from './components/Nav';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CrudGeneral from './components/generalStatus/CrudGeneral';
import CrudDemand from './components/demandControl/CrudDemand'
import CrudApplication from './components/applicationInventory/CrudApplication'
import CrudConfig from './components/configLists/CrudConfig'
import CrudFactory from './components/factoryExpenses/CrudFactory'
import Providers from './components/providers/Providers'
import CrudServers from './components/servers/CrudServers'
import Login from './components/Login/Login'
function App() {
  return (
    <Router>
      <Nav />
      <br /><br />
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/general' element={<CrudGeneral/>} />
        <Route path='/demand' element={<CrudDemand/>} />
        <Route path='/application' element={<CrudApplication/>} />
        <Route path='/configLists' element={<CrudConfig/>} />
        <Route path='/factory' element={<CrudFactory/>} />
        <Route path='/providers' element={<Providers/>} />
        <Route path='/servers' element={<CrudServers/>} />
      </Routes>
    </Router>
  );
}

export default App;
