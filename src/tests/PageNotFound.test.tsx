import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

test('renders PageNotFound component', () => {
  renderWithRouter(<App />, { route: '/*' });

  // Check if the 404 text is in the document
  const spanElement = screen.getByText(/404/i);
  expect(spanElement).toBeInTheDocument();

  // Check if the "Page Not Found" text is in the document
  const h1Element = screen.getByText(/Page Not Found/i);
  expect(h1Element).toBeInTheDocument();

  // Check if the link redirects to the correct path
  const linkElement = screen.getByText(/Back to Home/i);
  expect(linkElement.getAttribute('href')).toBe('/meals');
});
