import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import TimeStep from '../../components/TimeStep/TimeStep';
import SummaryCard from '../../components/SummaryCard/SummaryCard';
import { useNavigate } from 'react-router-dom';
import { useQuote } from '../../context/QuoteContext';
import './Summary.scss';

export default function Summary() {
    const navigate = useNavigate();
    const { quoteData, selectedPlan, loadFromStorage } = useQuote();

    // Cargar datos del localStorage al montar el componente
    useEffect(() => {
        loadFromStorage();
    }, [loadFromStorage]);

    return (
        <div>
          <Header />
          <TimeStep />
          <div className="information">
            <button className="information__back" onClick={() => navigate(-1)}>
              <img src="/Icon-button.svg" alt="Volver" className="information__back-icon" /> Volver
            </button>
    
            <h1 className="titleSummary">Resumen del seguro</h1>
            {selectedPlan && (
                <SummaryCard
                    plan={selectedPlan}
                    document={quoteData.document}
                    phone={quoteData.phone}
                />
            )}
          </div>
        </div>
    );
}