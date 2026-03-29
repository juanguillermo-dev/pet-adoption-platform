import { render, screen, fireEvent } from "@testing-library/react"
import {useTranslation} from "react-i18next";
import {useLocation, useNavigate} from "react-router-dom";
import ProdList from "../ProdList";

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn(() => {return true}),
  }));
  
jest.mock('react-router-dom', () => ({
    useLocation: jest.fn(),
    useNavigate: jest.fn(),
}));

describe("<ProdList />",()=>{
    it("Should render a List when called", () => {
        useTranslation.mockReturnValue({t: (key) => key});
        useLocation.mockReturnValue({state: {}});
        render(<ProdList />);
        expect(screen.getByTestId("list")).toBeInTheDocument();
    });
})