import { render, screen, fireEvent } from "@testing-library/react"
import {useTranslation} from "react-i18next";
import {useLocation, useNavigate} from "react-router-dom";
import PetList from "../gruposFamiliares";

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
    it("Should have a group of families displaying by default", () => {
        useTranslation.mockReturnValue({t: (key) => key});
        useLocation.mockReturnValue({state: {}});
        const { getAllByTestId, getByTestId } = render(<PetList />);
        render(<PetList />);
        expect(screen.getAllByTestId("family-group")).toBeTruthy();
    });
    it("Should have a group of pets displaying by default", () => {
        useTranslation.mockReturnValue({t: (key) => key});
        useLocation.mockReturnValue({state: {}});
        const { getAllByTestId, getByTestId } = render(<PetList />);
        render(<PetList />);
        expect(screen.getAllByTestId("pet-card")).toBeTruthy();
    });
})