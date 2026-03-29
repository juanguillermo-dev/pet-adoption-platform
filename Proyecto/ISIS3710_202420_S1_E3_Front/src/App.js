import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PetList from "./components/PetList"; // Componente de listado de mascotas
import PetDetails from "./components/PetDetails"; // Componente para mostrar detalles de una mascota
import NavBar from "./components/NavBar"; // Componente de navegación
import Footer from "./components/Footer"; // Componente de pie de página
import HomePage from "./components/HomePage"; // Importa el componente HomePage que creamos
import FormsPeticion from "./components/formsPeticion"; // Componente para la petición de hogar
import FormsInscripcion from "./components/formsInscripcion"; // Componente para la inscripción de hogar
import Verificacion from "./components/verificacion"; // Componente de verificación
import FundList from "./components/FundList"; // Importa el componente de listado de fundaciones
import HogarPaso from "./components/hogarPaso"; // Componente de Hogares de Paso
import AdoptionForm from "./components/AdoptionForm";
import UserProfile from './components/UserProfile';
import FormsPetEdit from './components/formsPetEdit'; // Importa el componente para editar mascotas
import AddPet from './components/AddPet'; // Importa el componente para agregar mascotas  
import ProdList from './components/ProdList'; // Asegúrate de que este componente exista
import ProdDetail from './components/ProdDetail'; // Importa el componente de detalles del producto
import FundDetail from './components/FundDetail'; // Importa el componente de detalles de la fundación
import AddProd from "./components/AddProd"; // Importa el componente para agregar productos
import FormsProdEdit from "./components/formsProdEdit";
import FormsFundEdit from './components/formsFundEdit'; // Asegúrate de importar FormsFundEdit

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div style={{ backgroundColor: '#f4f0ec', marginTop: '80px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/adopcion" element={<PetList />} />
            <Route path="/productos" element={<ProdList />} />
            <Route path="/product/:id" element={<ProdDetail />} />
            <Route path="/fundaciones" element={<FundList />} />
            <Route path="/funds/:id" element={<FundDetail />} />
            <Route path="/funds/edit/:id" element={<FormsFundEdit />} /> {/* Ruta para editar fundaciones */}
            <Route path="/hogares" element={<HogarPaso />} />
            <Route path="/pets" element={<PetList />} />
            <Route path="/pets/:id" element={<PetDetails />} />
            <Route path="/hogares" element={<HogarPaso />} />
            <Route path="/login" element={<h2>Login</h2>} />
            <Route path="/registro" element={<h2>Registro</h2>} />
            <Route path="/peticiones-hogar" element={<FormsPeticion />} />
            <Route path="/hogar-inscribir" element={<FormsInscripcion />} />
            <Route path="/verificacion" element={<Verificacion />} />
            <Route path="/adopcion-formulario" element={<AdoptionForm />} />
            <Route path="/profile/:userId" element={<UserProfile />} />
            <Route path="/pets/edit/:id" element={<FormsPetEdit />} /> {/* Ruta para editar mascotas */}
            <Route path="/productos/edit/:id" element={<FormsProdEdit />} /> 
            <Route path="/add-pet" element={<AddPet />} />
            <Route path="/add-product" element={<AddProd />} /> {/* Nueva ruta */}
            <Route path="/verificacion" element={<Verificacion />} />
            <Route path="/form-peticion" element={<FormsPeticion />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
