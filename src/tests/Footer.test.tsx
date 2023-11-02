import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

describe('Testando o arquivo Footer.js', () => {
  it('Teste se o arquivo Footer.js contém os 2 ícones, um para comidas e outro para bebidas.', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    const drinks = screen.getByTestId('drinks-bottom-btn');
    const meals = screen.getByTestId('meals-bottom-btn');

    expect(drinks).toBeInTheDocument();
    expect(meals).toBeInTheDocument();
  });

  it('Teste se o arquivo Footer.js contém um ícone para explorar bebidas', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    const drinks = screen.getByTestId('drinks-bottom-btn');

    expect(drinks).toBeInTheDocument();
  });

  it('Teste se o arquivo Footer.js contém um ícone para explorar comidas', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    const meals = screen.getByTestId('meals-bottom-btn');
    expect(meals).toBeInTheDocument();
  });
});
