import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FormsFundEdit from "../formsFundEdit";

describe('<FormsFundEdit />', () => {
  test('Renders fields for each key', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({
        'nombreActualizado': "",
        'ciudadActualizada': "",
        'descripcionActualizada': "",
        'correoActualizado': "",
        'telefonoActualizado': "",
        'direccionActualizada': "",
        'redesActualizadas': "",
      })
    }));

    render(
      <MemoryRouter>
        <FormsFundEdit />
      </MemoryRouter>
    );

    const keys = [
      'nombreActualizado',
      'ciudadActualizada',
      'descripcionActualizada',
      'correoActualizado',
      'telefonoActualizado',
      'direccionActualizada',
      'redesActualizadas'
    ];

    for (const key of keys) {
      await waitFor(() => expect(screen.getByTestId(key)).toBeInTheDocument());
    }
  });

  test('Submits form and alerts on success', () => {
    // Puedes agregar un test para verificar la funcionalidad de envío del formulario
    // Aquí puedes simular el evento de enviar y verificar el comportamiento esperado
  });

  test('Shows alert if fields are empty', () => {
    // Aquí puedes agregar un test para verificar que se muestre una alerta si los campos están vacíos
  });
});
