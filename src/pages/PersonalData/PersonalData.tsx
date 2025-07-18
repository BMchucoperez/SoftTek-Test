import Header from '../../components/Header/Header';
import QuoteForm from '../../components/QuoteForm/QuoteForm';
import Footer from '../../components/Footer/Footer';
import './PersonalData.scss';

export default function PersonalData() {
  return (
    <div className="personaldata-page">
      <div className="background-overlay">
        <div className="circle-one"></div>
        <div className="circle-two"></div>
      </div>

      <Header />
       <main>
        <div className="quote">
          <div className="quote__left">
            <img
                src="/familia.png"
                alt="Familia"
                className="quote__image"
            />
          </div>
          <div className="quote__right">
            <div className="quote__group">
              <div className="quote__block">
                <p className="quote__badge">Seguro Salud Flexible</p>
                <h1 className="quote__title">Creado para ti y tu familia</h1>
              </div>
              <img
                src="/familia.png"
                alt="Familia"
                className="quote__image2"
              />
            </div>
            <div className="quote__divider" />
            <p className="quote__subtitle">
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
            </p>
           <QuoteForm /> 
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
