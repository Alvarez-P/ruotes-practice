import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from '../App';

test('Renders home page', async () => {
  render(<App />);
  expect(screen.getByRole('heading')).toHaveTextContent('Home')
});
