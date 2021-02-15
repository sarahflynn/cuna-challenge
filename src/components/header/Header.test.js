import { render, screen } from '@testing-library/react';
import Header from './Header';

test('matches snapshot', () => {
  const header = render(<Header />);
  expect(header).toMatchSnapshot();
});

test('renders CUNA Mutual logo', () => {
  render(<Header />);
  const logo = screen.getByAltText('CUNA Mutual logo');
  expect(logo).toBeDefined();
});
