import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FundacionModal from '../FundacionModal';

describe('<FundacionModal />', () => {
  it("should render modal with all input fields", () => {
    render(<FundacionModal isOpen={true} onRequestClose={jest.fn()} />);

    // Verifica que todos los campos de entrada se rendericen correctamente
    expect(screen.getByPlaceholderText('Nombre de la Fundación')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Correo')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Ciudad')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Dirección')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Teléfono')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Descripción')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Inscribir Fundación/i })).toBeInTheDocument(); // Cambiado a getByRole
  });

  it("should submit form data correctly", () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
          status: 201,
          json: () => Promise.resolve({}),
        })
    );

    render(<FundacionModal isOpen={true} onRequestClose={jest.fn()} />);

    // Simula el llenado de campos del formulario
    fireEvent.change(screen.getByPlaceholderText('Nombre de la Fundación'), {
      target: { value: 'Fundación Ejemplo' },
    });
    fireEvent.change(screen.getByPlaceholderText('Correo'), {
      target: { value: 'ejemplo@fundacion.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Ciudad'), {
      target: { value: 'Madrid' },
    });
    fireEvent.change(screen.getByPlaceholderText('Dirección'), {
      target: { value: 'Calle Ejemplo 123' },
    });
    fireEvent.change(screen.getByPlaceholderText('Teléfono'), {
      target: { value: '123456789' },
    });
    fireEvent.change(screen.getByPlaceholderText('Descripción'), {
      target: { value: 'Descripción de la fundación' },
    });

    // Simula el envío del formulario
    fireEvent.click(screen.getByRole('button', { name: /Inscribir Fundación/i }));

    // Verifica que los datos hayan sido procesados (puedes simular una alerta o consola)
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
