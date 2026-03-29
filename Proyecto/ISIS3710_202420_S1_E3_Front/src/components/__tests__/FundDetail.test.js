import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import FundDetail from '../FundDetail';
import { useTranslation } from 'react-i18next';

// Mock de useTranslation
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }), // Simula la función de traducción
}));

describe('FundDetail Component', () => {
  test('renderiza correctamente los detalles de la fundación', async () => {
    const mockFund = {
      id: 1,
      name: 'Fundación PawPal',
      city: 'Bogotá',
      description: 'Ayudamos a los animales necesitados.',
      email: 'contacto@pawpal.org',
      phone: '1234567890',
      address: 'Calle Falsa 123',
      imagen: 'https://via.placeholder.com/400x300'
    };

    // Simula el fetch de los datos
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockFund),
      })
    );

    // Renderiza el componente ANTES del waitFor
    render(
      <MemoryRouter initialEntries={['/fund/1']}>
        <Routes>
          <Route path="/fund/:id" element={<FundDetail />} />
        </Routes>
      </MemoryRouter>
    );

    // Espera a que se rendericen los datos de la fundación después del fetch
    await waitFor(() => {
      expect(screen.getByText('Fundación PawPal')).toBeInTheDocument();
    });

    // Verifica los demás datos de la fundación
    expect(screen.getByText('Bogotá')).toBeInTheDocument();
    expect(screen.getByText('Ayudamos a los animales necesitados.')).toBeInTheDocument();
    expect(screen.getByText('contacto@pawpal.org')).toBeInTheDocument();
  });

  test('muestra mensaje de no encontrado si no se encuentra la fundación', async () => {
    // Simula el fetch vacío
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );

    // Renderiza el componente
    render(
      <MemoryRouter initialEntries={['/fund/999']}>
        <Routes>
          <Route path="/fund/:id" element={<FundDetail />} />
        </Routes>
      </MemoryRouter>
    );

    // Espera a que se muestre el mensaje "notFound"
    await waitFor(() => {
      expect(screen.getByText('FundDetail.notFound')).toBeInTheDocument();
    });
  });
});
