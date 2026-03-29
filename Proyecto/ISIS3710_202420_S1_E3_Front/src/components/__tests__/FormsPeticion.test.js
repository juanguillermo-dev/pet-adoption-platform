import { render, screen, fireEvent } from "@testing-library/react"
import FormsPeticion from "../formsPeticion";
import {useTranslation} from "react-i18next";




beforeAll(() => {
    // Mock de scrollIntoView para evitar errores en jsdom
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
  });



jest.mock('react-i18next', () => ({
    useTranslation: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
    useLocation: jest.fn(),
    useNavigate: jest.fn(),
}));

const formMock = {
    nombre: "FormMock",
    correo: "mar@gmail.com",
    telefono: "1234567890",
    direccion: "dirMock",
    descripcionTexto:"textMock",
    descripcionImagen: ["photo.png"]
}

describe("<FormsPeticion />", () => {
    it("Should be able to check when there is no photo",() => {
        useTranslation.mockReturnValue({t: (key) => key});
        const FormMock = formMock;
        render(<FormsPeticion/>);
        fireEvent.change(screen.getByTestId("nombre"),formMock.nombre);
        fireEvent.change(screen.getByTestId("correo"),formMock.correo);
        fireEvent.change(screen.getByTestId("telefono"),formMock.telefono);
        fireEvent.change(screen.getByTestId("direccion"),formMock.direccion);
        fireEvent.change(screen.getByTestId("descripcionTexto"),formMock.descripcionTexto);
        //Notice we're not giving the form context for photos, it is left blank.

        fireEvent.submit(screen.getByTestId("send-form"))
        expect(screen.getByTestId("text-danger")).toBeInTheDocument();
    })
})