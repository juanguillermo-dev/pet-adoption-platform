import { screen, render, fireEvent } from "@testing-library/react";
import { useLocation, useNavigate } from "react-router-dom";
import ProdDetail from "../ProdDetail";

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

const productMock = {
  id: '12345',
  nombreProducto: 'Producto de Prueba',
  disponibleEn: 'Tienda Local',
  precio: '1000000',
  descripcion: 'Este es un producto de prueba',
  imagen: 'https://example.com/producto.jpg',
};

describe("<ProdDetail />", () => {
  beforeEach(() => {
    window.alert = jest.fn();  
  });

  it("Should redirect if there isn't a state", () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    useLocation.mockReturnValue({}); 

    render(<ProdDetail />);
    
    expect(navigate).toHaveBeenCalledWith("/productos");
  });

  it("Should redirect if there isn't a product in the state", () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    useLocation.mockReturnValue({ state: {} }); 

    render(<ProdDetail />);
    
    expect(navigate).toHaveBeenCalledWith("/productos");
  });

  it("Should render the header correctly", () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    useLocation.mockReturnValue({ state: { product: productMock } });

    render(<ProdDetail />);

    expect(screen.getByText(productMock.nombreProducto)).toBeInTheDocument();
    expect(screen.getByText(`Disponible en: ${productMock.disponibleEn}`)).toBeInTheDocument();
    expect(screen.getByText(`Precio: $${productMock.precio}`)).toBeInTheDocument();
  });

  it("Should go back to lists when clicking the header button", () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    useLocation.mockReturnValue({ state: { product: productMock } });

    render(<ProdDetail />);

    const backButton = screen.getByText("Volver al listado");
    fireEvent.click(backButton);

    expect(navigate).toHaveBeenCalledWith("/productos");
  });

  it("Buy button should show correct message", () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    useLocation.mockReturnValue({ state: { product: productMock } });

    render(<ProdDetail />);

    const buyButton = screen.getByText("Comprar");
    fireEvent.click(buyButton);

    expect(window.alert).toHaveBeenCalledWith(`Compraste ${productMock.nombreProducto} por ${productMock.precio}`);
  });

  it("Edit button should redirect with the correct uri", () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    useLocation.mockReturnValue({ state: { product: productMock } });

    render(<ProdDetail />);

    const editButton = screen.getByText("Editar");
    fireEvent.click(editButton);

    expect(navigate).toHaveBeenCalledWith(`/productos/edit/${productMock.id}`, { state: { product: productMock } });
  });
});
