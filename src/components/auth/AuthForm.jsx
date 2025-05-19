import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const InputField = ({ id, label, type, placeholder, register, error, valuePrefix = "", validation = {} }) => {
  const [currentPlaceholder, setCurrentPlaceholder] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [dynamicInputPaddingLeft, setDynamicInputPaddingLeft] = useState(12);

  const inputRef = useRef(null);
  const textMeasurerRef = useRef(null);
  const prefixRef = useRef(null);

  const { onChange, onBlur: rhfOnBlur, name, ref: rhfRef } = register(id, validation);

  useEffect(() => {
    if (placeholder && charIndex < placeholder.length) {
      const timeoutId = setTimeout(() => {
        setCurrentPlaceholder((prev) => prev + placeholder[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [charIndex, placeholder]);

  useLayoutEffect(() => {
    if (valuePrefix && prefixRef.current) {
      const measuredPrefixWidth = prefixRef.current.offsetWidth;
      setDynamicInputPaddingLeft(measuredPrefixWidth + 4);
    } else {
      setDynamicInputPaddingLeft(12);
    }
  }, [valuePrefix, prefixRef.current]);

  const updateCaretPosition = () => {
    if (inputRef.current && textMeasurerRef.current) {
      const inputText = inputRef.current.value;
      textMeasurerRef.current.textContent = inputText;
      const textWidth = textMeasurerRef.current.offsetWidth;
      setCaretPosition(dynamicInputPaddingLeft + textWidth);
    } else if (inputRef.current) {
      setCaretPosition(dynamicInputPaddingLeft);
    }
  };

  useEffect(() => {
    if (isFocused && inputRef.current) {
      updateCaretPosition();
    }
    if (!isFocused && inputRef.current && inputRef.current.value === '') {
      setCaretPosition(dynamicInputPaddingLeft);
    }
  }, [isFocused, inputRef.current, dynamicInputPaddingLeft]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    rhfOnBlur(e);
  };

  const handleChange = (e) => {
    onChange(e);
    if (textMeasurerRef.current) {
      textMeasurerRef.current.textContent = e.target.value;
    }
    if (inputRef.current) {
      updateCaretPosition();
    }
  };

  const combinedRef = (instance) => {
    rhfRef(instance);
    inputRef.current = instance;
    if (instance && document.activeElement === instance) {
      setIsFocused(true);
      updateCaretPosition();
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const currentInputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className="mb-6">
      <label htmlFor={id} className="block text-emerald-400 text-sm font-mono mb-1">
        {`// ${label}`}
      </label>
      <div className="relative group">
        <span
          ref={textMeasurerRef}
          className="absolute invisible whitespace-pre font-mono tracking-wider py-2 pr-3"
        ></span>
        <span
          ref={prefixRef}
          className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 font-mono pointer-events-none"
        >
          {valuePrefix}{valuePrefix && "> "}
        </span>
        <input
          ref={combinedRef}
          name={name}
          id={id}
          type={currentInputType}
          placeholder={currentPlaceholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          autoComplete="off"
          className={`
            w-full bg-transparent text-gray-300 placeholder-gray-500
            font-mono appearance-none
            py-2 ${type === 'password' ? 'pr-16' : 'pr-3'}
            border-0 border-b-2 ${error ? 'border-red-500' : 'border-gray-700'}
            focus:outline-none ${error ? 'focus:border-red-500' : 'focus:border-emerald-400'}
            transition-colors duration-150
            caret-transparent
            tracking-wider
          `}
          style={{ paddingLeft: `${dynamicInputPaddingLeft}px` }}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-gray-400 hover:text-emerald-400 focus:outline-none font-mono"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? '[Hide]' : '[Show]'}
          </button>
        )}
        {isFocused && (
          <span
            className="
              absolute top-1/2 transform -translate-y-1/2
              h-[1.2em] w-[0.6em] bg-emerald-400
              pointer-events-none
              [animation:var(--animate-caret-blink)]
            "
            style={{ left: `calc(${caretPosition}px - 10px)` }}
          ></span>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1 font-mono">{`Error: ${error.message}`}</p>}
    </div>
  );
};

const AuthForm = ({ fields, onSubmit, submitButtonText, title, formError, isLoading }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const isLoginPage = title === "User.Authenticate()";

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-4 font-mono">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-700/50 relative">
        <Link to="/" className="absolute top-4 left-4 text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm font-mono">
          &lt; Back to Home
        </Link>
        <h2 className="md:text-3xl text-2xl font-bold text-center text-emerald-400 mb-2 pt-8">
          <span className="text-gray-500">&lt;</span>
          {title}
          <span className="text-gray-500">&nbsp;/&gt;</span>
        </h2>
        <p className="text-center text-gray-400 mb-8">
          <span className="text-gray-500">/* Authenticate to proceed */</span>
        </p>

        {formError && (
          <div className="bg-red-900/30 border border-red-700 text-red-300 p-3 rounded-md mb-6 text-center font-mono">
            {formError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          {fields.map((field) => (
            <InputField
              key={field.id}
              id={field.id}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              register={register}
              error={errors[field.id]}
              valuePrefix={field.valuePrefix}
              validation={field.validation || {}}
            />
          ))}
          <button
            type="submit"
            className={`
              w-full text-white font-bold py-3 px-4 rounded-md
              focus:outline-none focus:shadow-outline transition-all duration-200
              transform hover:scale-105 active:scale-95 shadow-lg
              ${isLoading ? 'bg-gray-600 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700'}
            `}
            disabled={isLoading}
          >
            {submitButtonText}
          </button>
        </form>

        <div className="text-center mt-6">
          {isLoginPage ? (
            <p className="text-sm text-gray-400">
              // No account yet?{' '}
              <Link to="/signup" className="font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
                Create_Session()
              </Link>
            </p>
          ) : (
            <p className="text-sm text-gray-400">
              // Already have an account?{' '}
              <Link to="/login" className="font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
                Authenticate_User()
              </Link>
            </p>
          )}
        </div>
      </div>
       <p className="text-center text-gray-500 mt-8 text-sm">
        <span className="text-gray-600">--</span> Process Terminated <span className="text-gray-600">--</span>
      </p>
    </div>
  );
};

export default AuthForm;
