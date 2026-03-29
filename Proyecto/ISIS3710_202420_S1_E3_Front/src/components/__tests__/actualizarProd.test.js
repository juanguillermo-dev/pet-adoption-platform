import { render, screen } from "@testing-library/react";
import ActualizarProd from "../actualizarProd";

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

describe('<ActualizarProd />', () => {
  it("Renders fields for each key", () => {
    const keys = [
      'imagenActualizada',
      'nombreActualizado',
      'precioActualizado',
      'descActualizada'
    ];

    const producto = {
      imagen: '',
      nombre: 'Producto de prueba',
      precio: '50',
      desc: 'Descripción de prueba'
    };

    render(<ActualizarProd producto={producto} onSave={jest.fn()} />);

    for (const key of keys) {
      const field = screen.getByTestId(key);
      expect(field).toBeInTheDocument();
    }
  });
});
