import { useEffect, useState } from 'react';
import { getUsuario } from '../../api/api';
import { useQuote } from '../../context/QuoteContext';
import './SummaryCard.scss';

export default function SummaryCard() {
  const { quoteData, selectedPlan } = useQuote();
  const [user, setUser] = useState<{ name: string; lastName: string } | null>(null);

  useEffect(() => {
    getUsuario()
      .then((data) => setUser(data))
      .catch((err) => console.error('Error al obtener usuario:', err));
  }, []);

  return (
    <div className="summary-card">
      <p className="summary-card__label">PRECIOS CALCULADOS PARA:</p>
      <h2 className="summary-card__user">
        <img src="/ic_family.svg" alt="icon" />{' '}
        {user ? `${user.name} ${user.lastName}` : 'Cargando...'}
      </h2>

      <hr className="summary-card__divider" />

      <p className="summary-card__section-title">Responsable de pago</p>
      <p className="summary-card__section-subtitle">DNI: {quoteData.document}</p>
      <p className="summary-card__section-subtitle">Celular: {quoteData.phone}</p>

      <p className="summary-card__section-title">Plan elegido</p>
      <p className="summary-card__section-subtitle">{selectedPlan?.name}</p>
      <p className="summary-card__section-subtitle">Costo del Plan: ${selectedPlan?.price} al mes</p>
    </div>
  );
}
