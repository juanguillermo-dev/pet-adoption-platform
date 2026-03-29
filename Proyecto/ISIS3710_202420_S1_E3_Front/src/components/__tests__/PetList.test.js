import { render, screen, fireEvent } from "@testing-library/react"
import {useTranslation} from "react-i18next";
import {useLocation, useNavigate} from "react-router-dom";
import PetList from "../PetList";

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn(() => {return true}),
  }));
  
jest.mock('react-router-dom', () => ({
    useLocation: jest.fn(),
    useNavigate: jest.fn(),
}));

describe("<PetList />",()=>{
    it("Should render a List when called", () => {
        useTranslation.mockReturnValue({t: (key) => key});
        useLocation.mockReturnValue({state: {}});
        render(<PetList />);
        expect(screen.getByTestId("list")).toBeInTheDocument();
    });
    it("Should filter male animals", () => {
        useTranslation.mockReturnValue({t: (key) => key});
        useLocation.mockReturnValue({state: {}});
        render(<PetList />);
        fireEvent.change(screen.getByTestId('pet_gender'), { target: { value: "Macho" } })
        expect(screen.getByTestId("pet_gender")).toHaveValue("Macho");
    }); 
    it("Should filter female animals", () => {
        useTranslation.mockReturnValue({t: (key) => key});
        useLocation.mockReturnValue({state: {}});
        render(<PetList />);
        fireEvent.change(screen.getByTestId('pet_gender'), { target: { value: "Hembra" } })
        expect(screen.getByTestId("pet_gender")).toHaveValue("Hembra");
    }); 
})