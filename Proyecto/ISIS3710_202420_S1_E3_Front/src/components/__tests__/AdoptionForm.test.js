import React from 'react';
import {fireEvent, render, screen} from "@testing-library/react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import AdoptionForm from "../AdoptionForm";

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

window.alert = jest.fn();

describe("<AdoptionForm />", () => {
  it("Empty submit should fail", () => {
    useTranslation.mockReturnValue({t: (key) => key});

    render(<AdoptionForm />);

    const submitButton = screen.getByTestId("submit");

    expect(submitButton).toBeInTheDocument();

    fireEvent.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith("AdoptionForm.errorCompleteFields");
  });

  it("Non-empty submit should not fail", () => {
    useTranslation.mockReturnValue({t: (key) => key});

    const navigate = jest.fn();

    useNavigate.mockReturnValue(navigate);

    render(<AdoptionForm />);

    fireEvent.change(screen.getByTestId('AdoptionForm.mascotasEnCasa'), { target: { value: 'Yes' } });
    fireEvent.change(screen.getByTestId('AdoptionForm.personasHogar'), { target: { value: '3' } });
    fireEvent.change(screen.getByTestId('AdoptionForm.alergias'), { target: { value: 'No' } });
    fireEvent.change(screen.getByTestId('AdoptionForm.mascotasAntes'), { target: { value: 'Yes' } });
    fireEvent.change(screen.getByTestId('AdoptionForm.motivoAdopcion'), { target: { value: 'Love animals' } });
    fireEvent.change(screen.getByTestId('AdoptionForm.costosVeterinarios'), { target: { value: 'Can afford' } });
    fireEvent.change(screen.getByTestId('AdoptionForm.visitaSeguimiento'), { target: { value: 'Yes' } });

    const submitButton = screen.getByTestId("submit");

    fireEvent.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith("AdoptionForm.successMessage");
    expect(navigate).toHaveBeenCalledWith("/pets");
  });
});
