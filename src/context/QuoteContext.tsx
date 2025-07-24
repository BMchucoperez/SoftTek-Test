import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface QuoteData {
  documentType: string;
  document: string;
  phone: string;
  privacy: boolean;
  comms: boolean;
}

interface SelectedPlan {
  name: string;
  price: number;
  description?: string[];
}

interface QuoteContextType {
  quoteData: QuoteData;
  selectedPlan: SelectedPlan | null;
  updateQuoteData: (data: Partial<QuoteData>) => void;
  setSelectedPlan: (plan: SelectedPlan | null) => void;
  clearQuoteData: () => void;
  loadFromStorage: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

const initialQuoteData: QuoteData = {
  documentType: 'dni',
  document: '',
  phone: '',
  privacy: false,
  comms: false,
};

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [quoteData, setQuoteData] = useState<QuoteData>(initialQuoteData);

  const [selectedPlan, setSelectedPlanState] = useState<SelectedPlan | null>(null);

  const updateQuoteData = (data: Partial<QuoteData>) => {
    setQuoteData(prev => {
      const newData = { ...prev, ...data };

      // Sincronizar con localStorage
      if (data.document !== undefined) {
        localStorage.setItem('document', data.document);
      }
      if (data.phone !== undefined) {
        localStorage.setItem('phone', data.phone);
      }

      return newData;
    });
  };

  const setSelectedPlan = (plan: SelectedPlan | null) => {
    setSelectedPlanState(plan);
  };

  const loadFromStorage = useCallback(() => {
    const savedDocument = localStorage.getItem('document');
    const savedPhone = localStorage.getItem('phone');

    if (savedDocument || savedPhone) {
      setQuoteData(prev => ({
        ...prev,
        document: savedDocument || '',
        phone: savedPhone || '',
      }));
    }
  }, []);

  const clearQuoteData = () => {
    setQuoteData(initialQuoteData);
    setSelectedPlanState(null);
    localStorage.removeItem('document');
    localStorage.removeItem('phone');
  };

  return (
    <QuoteContext.Provider
      value={{
        quoteData,
        selectedPlan,
        updateQuoteData,
        setSelectedPlan,
        clearQuoteData,
        loadFromStorage,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error('useQuote debe usarse dentro de QuoteProvider');
  }
  return context;
}