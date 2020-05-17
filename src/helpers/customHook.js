/* eslint-disable no-undef */
/* eslint-disable */
/* eslint-disable no-console */
import { useState } from 'react';

const useForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);
  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    callback();
  }

  const handleInputChange = (event) => {
    if (typeof event.persist === "function") {
      event.persist();
    }
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    setInputs
  };
}
export default useForm;