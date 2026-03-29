import { render, screen, fireEvent } from "@testing-library/react";
import RegisterModal from "../RegisterModal";
import { useTranslation } from 'react-i18next';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

describe("<RegisterModal />", () => {
  beforeEach(() => {
    useTranslation.mockReturnValue({
      t: (key) => key, // Simula el hook de traducción
    });
    jest.spyOn(window, 'alert').mockImplementation(() => {}); // Mock de window.alert
  });

  afterEach(() => {
    jest.clearAllMocks(); // Limpiar mocks después de cada test
  });

  it("should render modal with all input fields", () => {
    render(<RegisterModal isOpen={true} onRequestClose={jest.fn()} />);

    // Verifica que los campos de entrada se rendericen correctamente
    expect(screen.getByPlaceholderText('RegisterModal.fullName')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('RegisterModal.email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('RegisterModal.password')).toBeInTheDocument();
    expect(screen.getByTestId('terms-checkbox')).toBeInTheDocument(); // Usar testid para el checkbox
  });

  it("should display an error if user already exists", () => {
    render(<RegisterModal isOpen={true} onRequestClose={jest.fn()} />);

    // Simula un nombre de usuario que ya existe
    fireEvent.change(screen.getByPlaceholderText('RegisterModal.fullName'), {
      target: { value: 'carlosperez' },
    });

    // Simula un correo que ya existe
    fireEvent.change(screen.getByPlaceholderText('RegisterModal.email'), {
      target: { value: 'carlospérez@correo.com' },
    });

    // Simula la contraseña
    fireEvent.change(screen.getByPlaceholderText('RegisterModal.password'), {
      target: { value: 'newpass' },
    });

    // Aceptar términos
    fireEvent.click(screen.getByTestId('terms-checkbox')); // Usar testid

    // Simula la acción de submit
    fireEvent.submit(screen.getByRole('button', { name: 'RegisterModal.createAccount' }));

    // Verifica que se muestre una alerta indicando que el usuario ya existe
    expect(window.alert).toHaveBeenCalledWith('RegisterModal.userExists');
  });

  it("should display an error if email is already in use", () => {
    render(<RegisterModal isOpen={true} onRequestClose={jest.fn()} />);

    // Simula un nombre de usuario que no existe
    fireEvent.change(screen.getByPlaceholderText('RegisterModal.fullName'), {
      target: { value: 'newuser' },
    });

    // Simula un correo que ya existe
    fireEvent.change(screen.getByPlaceholderText('RegisterModal.email'), {
      target: { value: 'carlospérez@correo.com' },
    });

    // Simula la contraseña
    fireEvent.change(screen.getByPlaceholderText('RegisterModal.password'), {
      target: { value: 'newpass' },
    });

    // Aceptar términos
    fireEvent.click(screen.getByTestId('terms-checkbox')); // Usar testid

    // Simula la acción de submit
    fireEvent.submit(screen.getByRole('button', { name: 'RegisterModal.createAccount' }));

    // Verifica que se muestre una alerta indicando que el correo ya está en uso
    expect(window.alert).toHaveBeenCalledWith('RegisterModal.emailExists');
  });

  it("should display an error if the email format is invalid", () => {
    render(<RegisterModal isOpen={true} onRequestClose={jest.fn()} />);

    // Simula un nombre de usuario que no existe
    fireEvent.change(screen.getByPlaceholderText('RegisterModal.fullName'), {
      target: { value: 'newuser' },
    });

    // Simula un correo no válido
    fireEvent.change(screen.getByPlaceholderText('RegisterModal.email'), {
      target: { value: 'invalid-email' },
    });

    // Simula la contraseña
    fireEvent.change(screen.getByPlaceholderText('RegisterModal.password'), {
      target: { value: 'newpass' },
    });

    // Aceptar términos
    fireEvent.click(screen.getByTestId('terms-checkbox')); // Usar testid

    // Simula la acción de submit
    fireEvent.submit(screen.getByRole('button', { name: 'RegisterModal.createAccount' }));

    // Verifica que se muestre una alerta indicando que el formato del correo es inválido
    expect(window.alert).toHaveBeenCalledWith('RegisterModal.invalidEmail');
  });

  it("should display an error if terms are not accepted", () => {
    render(<RegisterModal isOpen={true} onRequestClose={jest.fn()} />);

    // Simula un nombre de usuario que no existe
    fireEvent.change(screen.getByPlaceholderText('RegisterModal.fullName'), {
      target: { value: 'newuser' },
    });

    // Simula un correo válido
    fireEvent.change(screen.getByPlaceholderText('RegisterModal.email'), {
      target: { value: 'newuser@example.com' },
    });

    // Simula la contraseña
    fireEvent.change(screen.getByPlaceholderText('RegisterModal.password'), {
      target: { value: 'newpass' },
    });

    // No acepta términos

    // Simula la acción de submit
    fireEvent.submit(screen.getByRole('button', { name: 'RegisterModal.createAccount' }));

    // Verifica que se muestre una alerta indicando que se deben aceptar los términos
    expect(window.alert).toHaveBeenCalledWith('RegisterModal.acceptTerms');
  });

  it("should successfully create an account if all data is valid", () => {
    render(<RegisterModal isOpen={true} onRequestClose={jest.fn()} />);
  
    // Simula el ingreso de datos válidos
    fireEvent.change(screen.getByPlaceholderText('RegisterModal.fullName'), { target: { value: 'newuser' } });
    fireEvent.change(screen.getByPlaceholderText('RegisterModal.email'), { target: { value: 'newuser@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('RegisterModal.password'), { target: { value: 'newpass' } });
  
    // Aceptar términos (esto es importante)
    fireEvent.click(screen.getByTestId('terms-checkbox'));
  
    // Simula la acción de submit
    fireEvent.submit(screen.getByRole('button', { name: 'RegisterModal.createAccount' }));
  
    // Verifica que se muestre una alerta de éxito
    expect(window.alert).toHaveBeenCalledWith('RegisterModal.success');
  });
});

