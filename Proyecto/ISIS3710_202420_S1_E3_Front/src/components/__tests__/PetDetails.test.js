import {screen, render, fireEvent} from "@testing-library/react";
import {useTranslation} from "react-i18next";
import {useLocation, useNavigate} from "react-router-dom";
import PetDetails from "../PetDetails";

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

const petMock = {
  id: '12345',
  name: 'Whiskers',
  location: 'New York, NY',
  shelter: 'NY Animal Shelter',
  distance: '5 miles',
  images: [
    'https://example.com/pet1.jpg',
    'https://example.com/pet2.jpg',
    'https://example.com/pet3.jpg',
  ],
  description: 'Whiskers is a playful and friendly cat who loves to cuddle.',
  gender: 'Female',
  species: 'Cat',
  breed: 'Siamese',
  age: 3,
  size: 'Medium',
  vaccinated: true,
  neutered: true,
  microchipped: true,
};


describe("<PetDetails />", () => {
  it("Should redirect if there isn't a state", () => {
    const navigate = jest.fn();

    useTranslation.mockReturnValue({t: (key) => key});
    useNavigate.mockReturnValue(navigate);
    useLocation.mockReturnValue({});

    render(<PetDetails />);
    expect(navigate).toHaveBeenCalledWith("/pets");
  });

  it("Should redirect if there isn't a pet in the state", () => {
    const navigate = jest.fn();

    useTranslation.mockReturnValue({t: (key) => key});
    useNavigate.mockReturnValue(navigate);
    useLocation.mockReturnValue({state: {}});

    render(<PetDetails />);
    expect(navigate).toHaveBeenCalledWith("/pets");
  });

  it("Should render the header correctly", () => {
    const navigate = jest.fn();

    useTranslation.mockReturnValue({t: (key) => key});
    useNavigate.mockReturnValue(navigate);
    useLocation.mockReturnValue({state: {
      pet: petMock
    }});

    render(<PetDetails />);

    const header = screen.getByTestId("header");
    const headerButton = screen.getByTestId("go_back");
    expect(header).toBeInTheDocument();
    expect(headerButton).toBeInTheDocument();
    expect(header).toHaveTextContent(petMock.name);
    expect(header).toHaveTextContent(petMock.location);
    expect(header).toHaveTextContent(petMock.shelter);
    expect(header).toHaveTextContent(petMock.id);
  });

  it("Should go back to lists when clicking the header button", () => {
    const navigate = jest.fn();

    useTranslation.mockReturnValue({t: (key) => key});
    useNavigate.mockReturnValue(navigate);
    useLocation.mockReturnValue({state: {
      pet: petMock,
    }});

    render(<PetDetails />);

    const button = screen.getByTestId("go_back");

    fireEvent.click(button);

    expect(navigate).toHaveBeenCalledWith("/pets");
  });

  it("Should not display images correctly when no images", () => {
    const navigate = jest.fn();

    useTranslation.mockReturnValue({t: (key) => key});
    useNavigate.mockReturnValue(navigate);
    useLocation.mockReturnValue({state: {
        pet: petMock,
      }});

    render(<PetDetails />);

    const container = screen.getByTestId("images_container");

    expect(container).toBeInTheDocument();
    const children = screen.getAllByTestId("pet_image");
    expect(children).toHaveLength(2);
  });

  it("Adoption button should redirect to the correct page", () => {
    const navigate = jest.fn();

    useTranslation.mockReturnValue({t: (key) => key});
    useNavigate.mockReturnValue(navigate);
    useLocation.mockReturnValue({state: {
        pet: petMock,
      }});

    render(<PetDetails />);

    const adoptionButton = screen.getByTestId("adoption_button");

    expect(adoptionButton).toBeInTheDocument();
    fireEvent.click(adoptionButton);
    expect(navigate).toHaveBeenCalledWith("/adopcion-formulario");
  });

  it ("Edit button should redirect with the correct uri", () => {
    const navigate = jest.fn();

    useTranslation.mockReturnValue({t: (key) => key});
    useNavigate.mockReturnValue(navigate);
    useLocation.mockReturnValue({state: {
        pet: petMock,
      }});

    render(<PetDetails />);

    const editButton = screen.getByTestId("edit_button");

    expect(editButton).toBeInTheDocument();

    fireEvent.click(editButton);

    expect(navigate).toHaveBeenCalledWith(`/pets/edit/${petMock.id}`, {state: {pet: petMock}});
  });
});
