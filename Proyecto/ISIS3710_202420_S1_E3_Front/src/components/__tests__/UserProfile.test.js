import { render, screen, act } from "@testing-library/react"; // Asegúrate de que act se importe desde react
import { MemoryRouter, Route, Routes } from "react-router-dom";
import UserProfile from "../UserProfile"; // Ruta de tu componente UserProfile

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe("<UserProfile />", () => {
  // Lista completa de usuarios para el test
  const usuarios = [
    {
        id: 1, usuario: 'carlosperez', contraseña: 'pass', nombre: 'Carlos Pérez',
        ciudad: 'Medellín', correo: 'carlospérez@correo.com', direccion: 'Calle 14 # 14-6',
        numero_telefonico: 3216322380, usuario_instagram: '@carlospérez_insta',
        descripcion: 'Este es el perfil de Carlos Pérez, un amante de las mascotas que vive en Medellín.',
        imagen: '/imagenes/pibe.png'
    },
    {
        id: 2, usuario: 'anagarcia', contraseña: 'pass', nombre: 'Ana García',
        ciudad: 'Bucaramanga', correo: 'anagarcía@correo.com', direccion: 'Calle 49 # 48-17',
        numero_telefonico: 3219028147, usuario_instagram: '@anagarcía_insta',
        descripcion: 'Este es el perfil de Ana García, un amante de las mascotas que vive en Bucaramanga.',
        imagen: '/imagenes/piba.png'
    },
    {
        id: 3, usuario: 'luismartinez', contraseña: 'pass', nombre: 'Luis Martínez',
        ciudad: 'Manizales', correo: 'luismartínez@correo.com', direccion: 'Calle 31 # 8-16',
        numero_telefonico: 3210402236, usuario_instagram: '@luismartínez_insta',
        descripcion: 'Este es el perfil de Luis Martínez, un amante de las mascotas que vive en Manizales.',
        imagen: '/imagenes/pibe.png'
    },
    {
        id: 4, usuario: 'sofíarodriguez', contraseña: 'pass', nombre: 'Sofía Rodríguez',
        ciudad: 'Santa Marta', correo: 'sofíarodríguez@correo.com', direccion: 'Calle 53 # 4-15',
        numero_telefonico: 3218296892, usuario_instagram: '@sofíarodríguez_insta',
        descripcion: 'Este es el perfil de Sofía Rodríguez, un amante de las mascotas que vive en Santa Marta.',
        imagen: '/imagenes/piba.png'
    },
    {
        id: 5, usuario: 'juangómez', contraseña: 'pass', nombre: 'Juan Gómez',
        ciudad: 'Cali', correo: 'juangómez@correo.com', direccion: 'Calle 46 # 39-13',
        numero_telefonico: 3219427375, usuario_instagram: '@juangómez_insta',
        descripcion: 'Este es el perfil de Juan Gómez, un amante de las mascotas que vive en Cali.',
        imagen: '/imagenes/pibe.png'
    },
    {
        id: 6, usuario: 'maríafernández', contraseña: 'pass', nombre: 'María Fernández',
        ciudad: 'Bogotá', correo: 'maríafernández@correo.com', direccion: 'Calle 28 # 27-11',
        numero_telefonico: 3218462773, usuario_instagram: '@maríafernández_insta',
        descripcion: 'Este es el perfil de María Fernández, un amante de las mascotas que vive en Bogotá.',
        imagen: '/imagenes/piba.png'
    },
    {
        id: 7, usuario: 'pedrotorres', contraseña: 'pass', nombre: 'Pedro Torres',
        ciudad: 'Cartagena', correo: 'pedrotorres@correo.com', direccion: 'Calle 94 # 42-6',
        numero_telefonico: 3214209127, usuario_instagram: '@pedrotorres_insta',
        descripcion: 'Este es el perfil de Pedro Torres, un amante de las mascotas que vive en Cartagena.',
        imagen: '/imagenes/pibe.png'
    },
    {
        id: 8, usuario: 'lauraramírez', contraseña: 'pass', nombre: 'Laura Ramírez',
        ciudad: 'Bucaramanga', correo: 'lauraramírez@correo.com', direccion: 'Calle 40 # 22-1',
        numero_telefonico: 3214444450, usuario_instagram: '@lauraramírez_insta',
        descripcion: 'Este es el perfil de Laura Ramírez, un amante de las mascotas que vive en Bucaramanga.',
        imagen: '/imagenes/piba.png'
    },
    {
        id: 9, usuario: 'andrésmorales', contraseña: 'pass', nombre: 'Andrés Morales',
        ciudad: 'Barranquilla', correo: 'andrésmorales@correo.com', direccion: 'Calle 24 # 12-2',
        numero_telefonico: 3215828278, usuario_instagram: '@andrésmorales_insta',
        descripcion: 'Este es el perfil de Andrés Morales, un amante de las mascotas que vive en Barranquilla.',
        imagen: '/imagenes/pibe.png'
    },
    {
        id: 10, usuario: 'camilasanchez', contraseña: 'pass', nombre: 'Camila Sánchez',
        ciudad: 'Cúcuta', correo: 'camilasánchez@correo.com', direccion: 'Calle 26 # 28-20',
        numero_telefonico: 3219697146, usuario_instagram: '@camilasánchez_insta',
        descripcion: 'Este es el perfil de Camila Sánchez, un amante de las mascotas que vive en Cúcuta.',
        imagen: '/imagenes/piba.png'
    }
  ];

  it("Should display user profile information correctly", async () => {
    // Mock de useParams para simular el ID del usuario desde la URL
    const mockUseParams = jest.spyOn(require('react-router-dom'), 'useParams');
    mockUseParams.mockReturnValue({ userId: "1" }); // Simula que el userId es 1
    
    // Renderiza el componente dentro de un Router de prueba
    await act(async () => {
      render(
        <MemoryRouter initialEntries={["/user/1"]}>
          <Routes>
            <Route path="/user/:userId" element={<UserProfile />} />
          </Routes>
        </MemoryRouter>
      );
    });

    const usuario = usuarios.find((user) => user.id === 1); // Usuario con id 1

    // Verifica que los detalles del perfil se muestren correctamente
    expect(screen.getByText(usuario.nombre)).toBeInTheDocument();
    expect(screen.getByText(usuario.ciudad)).toBeInTheDocument();
    expect(screen.getByText(usuario.correo)).toBeInTheDocument();
    expect(screen.getByText(usuario.numero_telefonico)).toBeInTheDocument();
    expect(screen.getByText(usuario.usuario_instagram)).toBeInTheDocument();
    expect(screen.getByText(usuario.descripcion)).toBeInTheDocument();
    
    // Verifica que la imagen de perfil esté presente
    const userImage = screen.getByAltText(usuario.nombre);
    expect(userImage).toHaveAttribute("src", usuario.imagen);
  });

  it("Should display 'Usuario no encontrado' if user does not exist", async () => {
    const mockUseParams = jest.spyOn(require('react-router-dom'), 'useParams');
    mockUseParams.mockReturnValue({ userId: "99" }); // Simula un ID de usuario que no existe
    
    await act(async () => {
      render(
        <MemoryRouter initialEntries={["/user/99"]}>
          <Routes>
            <Route path="/user/:userId" element={<UserProfile />} />
          </Routes>
        </MemoryRouter>
      );
    });

    expect(screen.getByText("Usuario no encontrado")).toBeInTheDocument();
  });
});