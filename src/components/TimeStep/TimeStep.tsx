import { useLocation } from 'react-router-dom';
import './TimeStep.scss';

export default function TimeStep() {
  const location = useLocation();
  const isStep1 = location.pathname.includes('/plans');
  const isStep2 = location.pathname.includes('/summary');

  return (
    <div className="time-step">
      <div className={`step ${isStep1 ? 'active' : ''}`}>
        <div className="circle">1</div>
        <span className="label">Planes y coberturas</span>
      </div>

      <div className="dotted-line" />

      <div className={`step ${isStep2 ? 'active' : ''}`}>
        <div className="circle">2</div>
        <span className="label">Resumen</span>
      </div>
    </div>
  );
}
