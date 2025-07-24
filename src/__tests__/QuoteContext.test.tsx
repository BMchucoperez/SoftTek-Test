import { render, screen, fireEvent } from '@testing-library/react';
import { QuoteProvider, useQuote } from '../context/QuoteContext';

// Componente para probar el contexto
function TestComponent() {
  const { quoteData, updateQuoteData } = useQuote();

  return (
    <div>
      <span data-testid="document">{quoteData.document}</span>
      <span data-testid="phone">{quoteData.phone}</span>
      <button 
        onClick={() => updateQuoteData({ document: '12345678' })}
        data-testid="update-btn"
      >
        Actualizar
      </button>
    </div>
  );
}

describe('QuoteContext', () => {
  test('Debe proporcionar valores vacíos iniciales', () => {
    render(
      <QuoteProvider>
        <TestComponent />
      </QuoteProvider>
    );

    expect(screen.getByTestId('document')).toHaveTextContent('');
    expect(screen.getByTestId('phone')).toHaveTextContent('');
  });

  test('Debería actualizar el valor del documento', () => {
    render(
      <QuoteProvider>
        <TestComponent />
      </QuoteProvider>
    );

    fireEvent.click(screen.getByTestId('update-btn'));
    expect(screen.getByTestId('document')).toHaveTextContent('12345678');
  });
});