import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useLogin(initialValue: string) {
  const [email, setEmail] = useState(initialValue);
  const [password, setPassword] = useState(initialValue);
  const navigate = useNavigate();

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

  const handleSubmit = () => {
    localStorage.setItem('user', JSON.stringify(email));
    resetForm();
    navigate('/meals');
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    addEmail,
    addPassword,
    validateForm,
    handleSubmit,
  };
}

export default useLogin;
