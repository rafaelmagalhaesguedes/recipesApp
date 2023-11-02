import { render, screen, fireEvent, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import AuthProvider from '../context/AuthContext';

const VALID_EMAIL = 'valid-email@example.com';
const INVALID_EMAIL = 'invalid-email';
const VALID_PASSWORD = 'validpassword123';
const INVALID_PASSWORD = 'short';
const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';

describe('Login Component Tests', () => {
  let app: RenderResult<typeof import('@testing-library/dom/types/queries'), HTMLElement, HTMLElement>;
  let enterButton: HTMLElement;

  beforeEach(() => {
    app = render(
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>,
    );

    enterButton = screen.getByTestId('login-submit-btn');
  });

  afterEach(() => {
    app.unmount();
  });

  test('it renders the email input field', () => {
    const emailInput = screen.getByTestId(EMAIL_INPUT);
    expect(emailInput).toBeInTheDocument();
  });

  test('it renders the password input field', () => {
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    expect(passwordInput).toBeInTheDocument();
  });

  test('user can enter a valid email in the email input field', () => {
    const emailInput = screen.getByTestId(EMAIL_INPUT);
    fireEvent.change(emailInput, { target: { value: VALID_EMAIL } });
  });

  test('user can enter a valid password in the password input field', () => {
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    fireEvent.change(passwordInput, { target: { value: VALID_PASSWORD } });
  });

  describe('Button State Tests', () => {
    test('it disables the "ENTER" button when email is invalid', () => {
      const emailInput = screen.getByTestId(EMAIL_INPUT);
      fireEvent.change(emailInput, { target: { value: INVALID_EMAIL } });
      expect(enterButton).toBeDisabled();
    });

    test('it disables the "ENTER" button when both email and password are invalid', () => {
      const emailInput = screen.getByTestId(EMAIL_INPUT);
      const passwordInput = screen.getByTestId(PASSWORD_INPUT);
      fireEvent.change(emailInput, { target: { value: INVALID_EMAIL } });
      fireEvent.change(passwordInput, { target: { value: INVALID_PASSWORD } });
      expect(enterButton).toBeDisabled();
    });

    test('it enables the "ENTER" button when both email and password are valid', () => {
      const emailInput = screen.getByTestId(EMAIL_INPUT);
      const passwordInput = screen.getByTestId(PASSWORD_INPUT);
      fireEvent.change(emailInput, { target: { value: VALID_EMAIL } });
      fireEvent.change(passwordInput, { target: { value: VALID_PASSWORD } });
      expect(enterButton).toBeEnabled();
    });

    test('it redirects to /meals when the "ENTER" button is clicked', () => {
      const emailInput = screen.getByTestId(EMAIL_INPUT);
      const passwordInput = screen.getByTestId(PASSWORD_INPUT);
      fireEvent.change(emailInput, { target: { value: VALID_EMAIL } });
      fireEvent.change(passwordInput, { target: { value: VALID_PASSWORD } });
      fireEvent.click(enterButton);
      expect(window.location.pathname).toBe('/meals');
    });
  });
});
