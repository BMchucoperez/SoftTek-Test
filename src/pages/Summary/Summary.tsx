import Header from '../../components/Header/Header';
import TimeStep from '../../components/TimeStep/TimeStep';
import SummaryCard from '../../components/SummaryCard/SummaryCard';
import { useLocation, useNavigate } from 'react-router-dom';
import './Summary.scss';

export default function Summary() {
    const location = useLocation();
    const navigate = useNavigate();

    const plan = location.state?.plan;
    const document = location.state?.document || localStorage.getItem('document') || 'No Disponible';
    const phone = location.state?.phone || localStorage.getItem('phone') || 'No Disponible';

    return (
        <div>
          <Header />
          <TimeStep />
          <div className="information">
            <button className="information__back" onClick={() => navigate(-1)}>
              <img src="/Icon-button.svg" alt="Volver" className="information__back-icon" /> Volver
            </button>
    
            <h1 className="titleSummary">Resumen del seguro</h1>
            {plan && (
                <SummaryCard
                    plan={plan}
                    document={document}
                    phone={phone}
                />
            )}
          </div>
        </div>
    );
}