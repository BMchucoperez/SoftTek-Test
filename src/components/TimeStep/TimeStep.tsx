import { useLocation, useNavigate } from "react-router-dom";
import "./TimeStep.scss";

export default function TimeStep() {
  const location = useLocation();
  const navigate = useNavigate();
  const isStep1 = location.pathname.includes("/plans");
  const isStep2 = location.pathname.includes("/summary");

  const handleGoBack = () => {
    if (isStep2) {
      navigate("/plans");
    } else if (isStep1) {
      navigate("/");
    }
  };

  const getCurrentStep = () => {
    if (isStep1) return 1;
    if (isStep2) return 2;
    return 1;
  };

  return (
    <div className="time-step">
      {/* Versión desktop */}
      <div className="time-step__desktop">
        <div className={`step ${isStep1 ? "active" : ""}`}>
          <div className="circle">1</div>
          <span className="label">Planes y coberturas</span>
        </div>

        <div className="dotted-line" />

        <div className={`step ${isStep2 ? "active" : ""}`}>
          <div className="circle">2</div>
          <span className="label">Resumen</span>
        </div>
      </div>

      {/* Versión mobile */}
      <div className="time-step__mobile">
        <button className="time-step__back-btn" onClick={handleGoBack}>
          <img src="/Icon-button.svg" alt="Volver"/>
        </button>

        <div className="time-step__progress">
          <span className="time-step__step-text">
            PASO {getCurrentStep()} DE 2
          </span>
          <div className="time-step__progress-bar">
            <div
              className="time-step__progress-fill"
              style={{ width: `${(getCurrentStep() / 2) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
