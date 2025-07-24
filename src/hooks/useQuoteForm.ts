import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuote } from '../context/QuoteContext';

export function useQuoteForm() {
  const navigate = useNavigate();
  const { quoteData, updateQuoteData, selectedPlan, setSelectedPlan } = useQuote();

  const [formErrors, setFormErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    updateQuoteData({
      [name]: newValue,
    });
  };

  const validate = () => {
    const errors: any = {};
    if (!quoteData.document) errors.document = 'Requerido';
    if (!quoteData.phone || quoteData.phone.length < 9) errors.phone = 'Requerido';
    if (!quoteData.privacy) errors.privacy = 'Obligatorio';
    if (!quoteData.comms) errors.comms = 'Obligatorio';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      return false;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/plans');
    }, 1500);

    return true;
  };

  return {
    formData: quoteData,
    handleInputChange,
    formErrors,
    handleSubmit,
    loading,
    selectedPlan,
    setSelectedPlan,
  };
}
