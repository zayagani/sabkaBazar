import { render, screen } from '@testing-library/react';
import App from './App';
import HEADER from '../src/Component/Header/index'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
