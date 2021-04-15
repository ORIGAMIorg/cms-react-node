import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders Protected link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Protected/i);
  expect(linkElement).toBeInTheDocument();
});
