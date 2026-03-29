import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test('renders PawPal login button', () => {
  render(<App />);
  const loginButton = screen.getByText(/Login/i); // Cambia 'learn react' por 'Login'
  expect(loginButton).toBeInTheDocument();
});

