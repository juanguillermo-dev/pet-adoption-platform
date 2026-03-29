import {render, screen} from "@testing-library/react";
import FormsPetEdit from "../formsPetEdit";

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

describe('<FormsPetEdit/>', () => {
  it("Renders fields for each key", () => {
    const keys = [
      'nombreActualizado',
      'direccionActualizada',
      'historiaActualizada',
      'generoActualizado',
      'razaActualizada',
      'edadActualizada',
      'tamanoActualizado',
      'vacunacionActualizada',
      'fertilidadActualizada',
      'microChipActualizado'
    ]

    render(<FormsPetEdit/>);

    for (const key of keys) {
      const field = screen.getByTestId(key);

      expect(field).toBeInTheDocument();
    }
  });
});