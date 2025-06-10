import {BrowserRouter as Router,Routes,Route} from"react-router-dom";
import Navbar from "./Pages/Navbar";
import Select from "./Pages/Select";
import Footer from "./Pages/Footer";
import SolicitaCredito from "./Pages/SolicitaCredito";
import Login  from "./Pages/Login";
import DashboardUsuario from "./Pages/DashboardUsuario";

function App() {
  return (
    <Router>
      
      <Navbar/>
    
      <Routes>
        <Route path="/"element={<Select/>}/>
        <Route path="/Solicita-credito"element={<SolicitaCredito/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/DashboardUsuario" element={<DashboardUsuario/>}/>
      </Routes>
      <Footer/>
      </Router>
  );
}
export default App;