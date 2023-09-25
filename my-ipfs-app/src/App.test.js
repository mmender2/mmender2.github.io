import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn ipfs link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn ipfs/i);
  expect(linkElement).toBeInTheDocument();
});
