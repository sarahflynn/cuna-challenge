import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world text', () => {
  render(<App />);
  const text = screen.getByText(/hello world/i);
  expect(text.innerHTML).toEqual('hello world');
});
