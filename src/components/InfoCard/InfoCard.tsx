import './InfoCard.scss';

interface InfoCardProps {
  title: string;
  price: number;
  description: string[];
  planData: any;
  onSelect: () => void;
}

export default function InfoCard({ title, price, description, onSelect }: InfoCardProps) {
  const iconSrc = title.toLowerCase().includes('clínica')
    ? '/IcHospitalLight.svg'
    : '/IcHomeLight.svg';

  return (
    <div className="info-card">
      <div className="info-card__header">
        <h3 className="info-card__title">{title}</h3>
        <div className="info-card__icon">
          <img src={iconSrc} alt="icon" />
        </div>
      </div>

      <p className="info-card__subtitle">COSTO DEL PLAN</p>
      <p className="info-card__price">${price} al mes</p>

      <hr className="info-card__divider" />

      <ul className="info-card__features">
        {description.map((item, index) => (
          <li key={index}>
            <strong>{item.split(' ')[0]}</strong> {item.slice(item.indexOf(' ') + 1)}
          </li>
        ))}
      </ul>

      <button className="info-card__button" onClick={onSelect}>
        Seleccionar Plan
      </button>
    </div>
  );
}
