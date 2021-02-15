import { render } from '@testing-library/react';
import App from './App';

test('matches snapshot', () => {
  const app = render(<App />);
  expect(app).toMatchSnapshot();
});
