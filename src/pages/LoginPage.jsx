import React, { useState } from 'react';
import AuthForm from '../components/auth/AuthForm';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formError, setFormError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleLogin = async (data) => {
    setFormError(null);
    setIsLoading(true);

    const loginEndpoint = `${apiBaseUrl}/auth/login/`;

    try {
      const response = await fetch(loginEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        let errorMessage = `Login failed: ${response.status}`;
        if (responseData) {
          if (responseData.non_field_errors && Array.isArray(responseData.non_field_errors) && responseData.non_field_errors.length > 0) {
            toast.error(responseData.non_field_errors[0]);
            errorMessage = responseData.non_field_errors[0];
          } else if (responseData.message) {
            toast.error(responseData.message);
            errorMessage = responseData.message;
          } else if (responseData.detail) {
            toast.error(responseData.detail);
            errorMessage = responseData.detail;
          } else {
            toast.error(errorMessage);
          }
        }
        setFormError(errorMessage);
        throw new Error(errorMessage);
      }

      console.log('Login successful. Full API Response:', responseData);

      if (responseData.tokens && responseData.tokens.access) {
        localStorage.setItem('authToken', responseData.tokens.access);
        toast.success('Login successful! Redirecting...');
        navigate('/welcome');
      } else {
        console.error('API Response for Login did not contain expected token structure:', responseData);
        const errMessage = 'Login successful, but access token was not found in the API response.';
        toast.error(errMessage);
        setFormError(errMessage);
        throw new Error(errMessage);
      }

    } catch (error) {
      setFormError(error.message || 'An unexpected error occurred during login.');
      console.error('Login error:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const loginFields = [
    {
      id: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'user@example.com',
      validation: {
        required: 'Email is required.',
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: 'Please enter a valid email address.'
        }
      }
    },
    {
      id: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'SecurePass123',
      validation: {
        required: 'Password is required.'
      }
    },
  ];

  return (
    <AuthForm
      fields={loginFields}
      onSubmit={handleLogin}
      submitButtonText={isLoading ? 'Authenticating...' : 'Authenticate'}
      title="User.Authenticate()"
      formError={formError}
      isLoading={isLoading}
    />
  );
};

export default LoginPage;
