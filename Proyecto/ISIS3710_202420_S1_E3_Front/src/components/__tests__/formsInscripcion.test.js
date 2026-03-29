import { render, screen, fireEvent, getByTestId } from "@testing-library/react"
import {useTranslation} from "react-i18next";
import {useLocation, useNavigate} from "react-router-dom";
import FormsInscripcion from "../formsInscripcion";

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn(() => {return true}),
  }));
  
jest.mock('react-router-dom', () => ({
    useLocation: jest.fn(),
    useNavigate: jest.fn(),
}));

const passMock = {
    nombre: "nameMock",
    id: 1,
    email: "mailMock@mailmock.mock",
    telefono: "phoneMock",
    direccion: "DistanceMock",
    otrasMascotas: "pets",
    experienciaCuidados: "care",
    tiempoCuidado: "time",
    capacidadAcogida:"capacity"
  }

describe("<FormsInscripcion />",()=>{
    it("Should render a form when called", () => {
        useTranslation.mockReturnValue({t: (key) => key});
        useLocation.mockReturnValue({state: {}});
        render(<FormsInscripcion />);
        expect(screen.getByTestId("list")).toBeInTheDocument();
    });
    it("Should be able to hold a name provided by the user", () => {
        useTranslation.mockReturnValue({t: (key) => key});
        useLocation.mockReturnValue({state: {}});
        render(<FormsInscripcion />);
        fireEvent.change(screen.getByTestId("nombre"), {target: {value:passMock.nombre}})
        expect(screen.getByTestId("nombre")).toHaveValue(passMock.nombre)
    });
    it("Should be able to hold a phone number provided by the user", () => {
        useTranslation.mockReturnValue({t: (key) => key});
        useLocation.mockReturnValue({state: {}});
        render(<FormsInscripcion />);
        fireEvent.change(screen.getByTestId("telefono"), {target: {value:passMock.telefono}})
        expect(screen.getByTestId("telefono")).toHaveValue(passMock.telefono)
    });
    it("Should be able to hold an email provided by the user", () => {
        useTranslation.mockReturnValue({t: (key) => key});
        useLocation.mockReturnValue({state: {}});
        render(<FormsInscripcion />);
        fireEvent.change(screen.getByTestId("email"), {target: {value:passMock.email}})
        expect(screen.getByTestId("email")).toHaveValue(passMock.email)
    });
    it("Should be able to hold an address provided by the user", () => {
        useTranslation.mockReturnValue({t: (key) => key});
        useLocation.mockReturnValue({state: {}});
        render(<FormsInscripcion />);
        fireEvent.change(screen.getByTestId("direccion"), {target: {value:passMock.direccion}})
        expect(screen.getByTestId("direccion")).toHaveValue(passMock.direccion)
    });
})