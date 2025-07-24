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

    const documentElement = screen.getByTestId('document');
    const phoneElement = screen.getByTestId('phone');

    expect(documentElement.textContent).toBe('');
    expect(phoneElement.textContent).toBe('');
  });

  test('Debería actualizar el valor del documento', () => {
    render(
      <QuoteProvider>
        <TestComponent />
      </QuoteProvider>
    );

    fireEvent.click(screen.getByTestId('update-btn'));

    const documentElement = screen.getByTestId('document');
    expect(documentElement.textContent).toBe('12345678');
  });
});