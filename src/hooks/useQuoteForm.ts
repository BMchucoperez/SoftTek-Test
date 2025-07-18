import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useQuoteForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    documentType: 'dni',
    document: '',
    phone: '',
    privacy: false,
    comms: false,
  });

  const [formErrors, setFormErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: number;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const validate = () => {
    const errors: any = {};
    if (!formData.document) errors.document = 'Requerido';
    if (!formData.phone || formData.phone.length < 9) errors.phone = 'Requerido';
    if (!formData.privacy) errors.privacy = 'Obligatorio';
    if (!formData.comms) errors.comms = 'Obligatorio';
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
    formData,
    handleInputChange,
    formErrors,
    handleSubmit,
    loading,
    selectedPlan,
    setSelectedPlan,
  };
}
