import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import TimeStep from '../../components/TimeStep/TimeStep';
import Card from '../../components/Card/Card';
import InfoCard from '../../components/InfoCard/InfoCard';
import { getPlans, getUsuario } from '../../api/api';
import { useNavigate, useLocation } from 'react-router-dom';
import './Plans.scss';

export default function Plans() {
  const [selectedOption, setSelectedOption] = useState<'me' | 'other' | null>(null);
  const [plans, setPlans] = useState<any[]>([]);
  const [userAge, setUserAge] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const document = location.state?.document || localStorage.getItem('document') || 'No Disponible';
  const phone = location.state?.phone || localStorage.getItem('phone') || 'No Disponible';

  useEffect(() => {
    if (selectedOption === 'me') {
      getUsuario()
        .then((user) => {
          const birthDateParts = user.birthDay.split('-');
          const birthDate = new Date(
            parseInt(birthDateParts[2]),
            parseInt(birthDateParts[1]) - 1,
            parseInt(birthDateParts[0])
          );
          const today = new Date();
          let age = today.getFullYear() - birthDate.getFullYear();
          const monthDiff = today.getMonth() - birthDate.getMonth();
          if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
          }
          setUserAge(age);
        })
        .catch((err) => console.error('Error al obtener usuario:', err));
    }

    if (selectedOption) {
      getPlans()
        .then((data) => {
          setPlans(data.list);
        })
        .catch((error) => {
          console.error('Error al obtener los planes:', error);
        });
    }
  }, [selectedOption]);

  const filteredPlans =
    selectedOption === 'me' && userAge !== null
      ? plans.filter((plan) => plan.age >= userAge)
      : plans;

  const handleSelectPlan = (plan: any) => {
    navigate('/summary', {
      state: {
        plan,
        document,
        phone,
      },
    });
  };

  return (
    <div>
      <Header />
      <TimeStep />
      <div className="information">
        <button className="information__back" onClick={() => navigate('/')}>
          <img src="/Icon-button.svg" alt="Volver" className="information__back-icon" /> Volver
        </button>

        <h1 className="information__title">Rocío ¿Para quién deseas cotizar?</h1>
        <p className="information__subtitle">
          Selecciona la opción que se ajuste más a tus necesidades.
        </p>

        <div className="information__cards">
          <Card
            title="Para mí"
            description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
            icon={<img src="/IcProtectionLight.svg" alt="Para mí" />}
            selected={selectedOption === 'me'}
            onClick={() => setSelectedOption('me')}
          />
          <Card
            title="Para alguien más"
            description="Realiza una cotización para uno de tus familiares o cualquier persona."
            icon={<img src="/IcAddUserLight.svg" alt="Para alguien más" />}
            selected={selectedOption === 'other'}
            onClick={() => setSelectedOption('other')}
          />
        </div>

        {selectedOption && (
          <div className="information__plans">
            {filteredPlans.map((plan, index) => {
              const adjustedPrice =
                selectedOption === 'other'
                  ? Math.round(plan.price * 0.95 * 100) / 100
                  : plan.price;

              return (
                <InfoCard
                  key={index}
                  title={plan.name}
                  price={adjustedPrice}
                  description={plan.description}
                  planData={{ ...plan, price: adjustedPrice }}
                  onSelect={() => handleSelectPlan({ ...plan, price: adjustedPrice })}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
