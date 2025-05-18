import React, { useState } from 'react';
import AuthForm from '../components/auth/AuthForm';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formError, setFormError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleSignup = async (data) => {
    setFormError(null);
    setIsLoading(true);

    const signupEndpoint = `${apiBaseUrl}/auth/register/`;

    try {
      const response = await fetch(signupEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          username: data.username,
          password: data.password,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        let errorMessage = `Signup failed: ${response.status}`;
        if (responseData) {
          if (responseData.email && Array.isArray(responseData.email) && responseData.email.length > 0) {
            toast.error(`Email: ${responseData.email[0]}`);
            errorMessage = `Email: ${responseData.email[0]}`;
          } else if (responseData.username && Array.isArray(responseData.username) && responseData.username.length > 0) {
            toast.error(`Username: ${responseData.username[0]}`);
            errorMessage = `Username: ${responseData.username[0]}`;
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

      console.log('Signup successful. Full API Response:', responseData);
      toast.success('Signup successful! Please proceed to login.');
      navigate('/login');

    } catch (error) {
      if (!formError && error.message) {
        toast.error(error.message || 'An unexpected error occurred during signup.');
      }
      setFormError(error.message || 'An unexpected error occurred during signup.');
      console.error('Signup error:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const signupFields = [
    {
      id: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'testuser',
      valuePrefix: 'user',
      validation: {
        required: 'Username is required.',
      }
    },
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
      label: 'Secure Key (Password)',
      type: 'password',
      placeholder: 'SecurePass123',
      validation: {
        required: 'Password is required.',

      }
    },
  ];

  return (
    <AuthForm
      fields={signupFields}
      onSubmit={handleSignup}
      submitButtonText={isLoading ? 'Registering...' : 'Register Account'}
      title="User.Registration()"
      formError={formError}
      isLoading={isLoading}
    />
  );
};

export default SignupPage;
