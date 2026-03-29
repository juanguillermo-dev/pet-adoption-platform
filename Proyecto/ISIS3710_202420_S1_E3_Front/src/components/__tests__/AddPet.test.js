import { render, screen, fireEvent } from "@testing-library/react"
import AddPet from "../AddPet";
import {useTranslation} from "react-i18next";

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn(),
}));
  
jest.mock('react-router-dom', () => ({
    useLocation: jest.fn(),
    useNavigate: jest.fn(),
}));
  
const petMock = {
    name: "PetMock",
    species: "Perro",
    breed: "breedMock",
    age:3,
    size:"Mediano",
    location:"locMock",
    gender:"Female",
    neutered:"No",
    vaccinated:"No",
    microchipped:"No",
    availabilityStatus:"Disponible",
    description:"dog",
    photos:["photo.png"]
}
  

describe("<AddPet />", () => {
    it("Should be able to check when there is no photos",() => {
        useTranslation.mockReturnValue({t: (key) => key});
        const PetMock = petMock;
        render(<AddPet/>);
        fireEvent.change(screen.getByTestId("name"),petMock.name);
        fireEvent.change(screen.getByTestId("species"),petMock.species);
        fireEvent.change(screen.getByTestId("breed"),petMock.breed);
        fireEvent.change(screen.getByTestId("age"),petMock.age);
        fireEvent.change(screen.getByTestId("size"),petMock.size);
        fireEvent.change(screen.getByTestId("location"),petMock.location);
        fireEvent.change(screen.getByTestId("gender"),petMock.gender);
        fireEvent.change(screen.getByTestId("neutered"),petMock.neutered);
        fireEvent.change(screen.getByTestId("vaccinated"),petMock.vaccinated);
        fireEvent.change(screen.getByTestId("microchipped"),petMock.microchipped);
        fireEvent.change(screen.getByTestId("availabilityStatus"),petMock.availabilityStatus);
        fireEvent.change(screen.getByTestId("description"),petMock.description);
        //Notice we're not giving the form context for photos, it is left blank.

        fireEvent.submit(screen.getByTestId("send-form"))
        expect(screen.getByTestId("text-danger")).toBeInTheDocument();
    })
}) 