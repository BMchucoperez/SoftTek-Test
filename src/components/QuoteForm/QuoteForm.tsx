import './QuoteForm.scss';
import { useQuoteForm } from '../../hooks/useQuoteForm';
import { useNavigate } from 'react-router-dom';

export default function QuoteForm() {
  const {
    formData,
    handleInputChange,
    handleSubmit,
    formErrors,
    loading,
  } = useQuoteForm();

  const navigate = useNavigate();

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = handleSubmit(e);

    if (isValid) {
      // Guardar en localStorage
      localStorage.setItem('document', formData.document);
      localStorage.setItem('phone', formData.phone);
      navigate('/plans', {
        state: {
          document: formData.document,
          phone: formData.phone
        }
      });
    }
  };

  return (
    <form className="quote__form" onSubmit={onFormSubmit}>
      <div className="quote__form-group">
        <select
          name="documentType"
          value={formData.documentType}
          onChange={handleInputChange}
          className={`quote__input1 ${formErrors.document ? 'error' : ''}`}
        >
          <option value="dni">DNI</option>
          <option value="ce">CE</option>
        </select>
        <div className='quote__inputContainer1'>
          <label htmlFor="document" className={`quote__label ${formErrors.document ? 'error' : ''}`}>
            Nro. de documento
          </label>
          <input
            type="text"
            name="document"
            value={formData.document}
            onChange={handleInputChange}
            maxLength={formData.documentType === 'dni' ? 8 : 12}
            className={`quote__input2 ${formErrors.document ? 'error' : ''}`}
          />
        </div>        
      </div>

      <div className='quote__inputContainer2'>
        <label htmlFor="phone" className={`quote__label ${formErrors.phone ? 'error' : ''}`}>
          Nro. de celular
        </label>
        <input
          type="tel"
          name="phone"
          maxLength={9}
          value={formData.phone}
          onChange={handleInputChange}
          className={`quote__input ${formErrors.phone ? 'error' : ''}`}
        />
      </div>

      <div className="quote__checkbox-group">
        <input
          type="checkbox"
          name="privacy"
          checked={formData.privacy}
          onChange={handleInputChange}
        />
        <label>
          Acepto la Política de Privacidad
        </label>
      </div>

      <div className="quote__checkbox-group">
        <input
          type="checkbox"
          name="comms"
          checked={formData.comms}
          onChange={handleInputChange}
        />
        <label>
          Acepto la Política Comunicaciones Comerciales
        </label>
      </div>

      <a href="/" className="quote__terms">
        Aplican Términos y Condiciones
      </a>

      <button type="submit" className="quote__button" disabled={loading}>
        {loading ? 'Enviando...' : 'Cotiza aquí'}
      </button>
    </form>
  );
}
