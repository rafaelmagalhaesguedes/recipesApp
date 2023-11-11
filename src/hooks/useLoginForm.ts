import { useState } from 'react';

function useLoginForm(initialValue: string) {
  const [email, setEmail] = useState(initialValue);
  const [password, setPassword] = useState(initialValue);

  const addEmail = (_email: string) => {
    setEmail(_email);
  };

  const addPassword = (_password: string) => {
    setPassword(_password);
  };

  const validateForm = () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword = password.length > 6;
    return isValidEmail && isValidPassword;
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    addEmail,
    addPassword,
    validateForm,
  };
}

export default useLoginForm;
