import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Para manejar la navegación
import LoginModal from '../LoginModal'; // Ajusta la ruta si es necesario
    
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key, // Mock de traducción simple
  }),
}));

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('<LoginModal />', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('should render the modal with all input fields', () => {
    render(
      <Router>
        <LoginModal isOpen={true} onRequestClose={jest.fn()} />
      </Router>
    );

    expect(screen.getByText('LoginModal.title')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('LoginModal.usernamePlaceholder')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('LoginModal.passwordPlaceholder')).toBeInTheDocument();
    expect(screen.getByText('LoginModal.forgotPassword')).toBeInTheDocument();
    expect(screen.getByText('LoginModal.loginButton')).toBeInTheDocument();
  });

  it('should display an error for incorrect login credentials', async () => {
    // Simula el fetch de los datos
    global.fetch = jest.fn(() =>
        Promise.resolve({
          status: 401,
          json: () => Promise.resolve({}),
        })
    );

    render(
      <Router>
        <LoginModal isOpen={true} onRequestClose={jest.fn()} />
      </Router>
    );

    // Intentar iniciar sesión con credenciales incorrectas
    fireEvent.change(screen.getByPlaceholderText('LoginModal.usernamePlaceholder'), { target: { value: 'incorrectUser' } });
    fireEvent.change(screen.getByPlaceholderText('LoginModal.passwordPlaceholder'), { target: { value: 'wrongPassword' } });

    fireEvent.click(screen.getByText('LoginModal.loginButton'));

    expect(global.fetch).toHaveBeenCalledTimes(1);

    await waitFor(() => expect(screen.getByText('LoginModal.error')).toBeInTheDocument()); // Se espera ver un mensaje de error
  });

  it('should log in correctly with valid credentials and navigate to profile', async () => {
    render(
      <Router>
        <LoginModal isOpen={true} onRequestClose={jest.fn()} />
      </Router>
    );

    // Simula el fetch de los datos
    global.fetch = jest.fn(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve({userId: 1, token: ""}),
        })
    );

    // Introducir credenciales válidas
    fireEvent.change(screen.getByPlaceholderText('LoginModal.usernamePlaceholder'), { target: { value: 'user' } });
    fireEvent.change(screen.getByPlaceholderText('LoginModal.passwordPlaceholder'), { target: { value: 'pass' } });

    fireEvent.click(screen.getByText('LoginModal.loginButton'));

    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('/profile/1')); // Comprobar que la navegación ocurre
  });

  it('should open the RegisterModal when clicking the Sign Up button', () => {
    render(
      <Router>
        <LoginModal isOpen={true} onRequestClose={jest.fn()} />
      </Router>
    );

    // Hacer clic en el botón de registro
    fireEvent.click(screen.getByText('LoginModal.signUp'));

    expect(screen.queryByText('RegisterModal.title')).toBeInTheDocument(); // Asegurarse de que se abre el modal de registro
  });

  it('should display social buttons', () => {
    render(
      <Router>
        <LoginModal isOpen={true} onRequestClose={jest.fn()} />
      </Router>
    );

    // Verificar que los botones de Google y Facebook están presentes
    expect(screen.getByRole('button', { name: /google/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /facebook/i })).toBeInTheDocument();
  });
});
