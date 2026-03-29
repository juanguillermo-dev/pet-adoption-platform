import { render, screen, fireEvent } from "@testing-library/react";
import AddProd from "../AddProd";
import { useTranslation } from "react-i18next";

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

const ProdMock = {
  nombreProducto: "Prueba Nombre",
  categoria: "Categoria Prod",
  precio: 1000000,
  vendedor: "Vendedor Prod",
  imagen: new File(['imagen'], 'imagen.png', { type: 'image/png' }),
};

describe("<AddProd />", () => {
  it("Should show error if no photo was provided", () => {
    useTranslation.mockReturnValue({ t: (key) => key });
    render(<AddProd />);

    fireEvent.change(screen.getByTestId("nombreProducto"), {
      target: { value: ProdMock.nombreProducto },
    });
    fireEvent.change(screen.getByTestId("categoria"), {
      target: { value: ProdMock.categoria },
    });
    fireEvent.change(screen.getByTestId("precio"), {
      target: { value: ProdMock.precio },
    });
    fireEvent.change(screen.getByTestId("vendedor"), {
      target: { value: ProdMock.vendedor },
    });

    fireEvent.submit(screen.getByTestId("send-form"));
    expect(screen.getByText("AddProd.error")).toBeInTheDocument();
  });

  it("Should show success message if all fields are provided", () => {
    useTranslation.mockReturnValue({ t: (key) => key });
    render(<AddProd />);

    fireEvent.change(screen.getByTestId("nombreProducto"), {
      target: { value: ProdMock.nombreProducto },
    });
    fireEvent.change(screen.getByTestId("categoria"), {
      target: { value: ProdMock.categoria },
    });
    fireEvent.change(screen.getByTestId("precio"), {
      target: { value: ProdMock.precio },
    });
    fireEvent.change(screen.getByTestId("vendedor"), {
      target: { value: ProdMock.vendedor },
    });

    fireEvent.change(screen.getByTestId("imagen"), {
      target: { files: [ProdMock.imagen] },
    });

    fireEvent.submit(screen.getByTestId("send-form"));
    expect(screen.getByText("AddProd.success")).toBeInTheDocument();
  });
});
