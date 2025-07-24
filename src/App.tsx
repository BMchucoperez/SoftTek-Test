import './App.css';
import AppRouter from './routes/Approuter';
import { QuoteProvider } from './context/QuoteContext';

function App() {
  return (
    <QuoteProvider>
      <AppRouter />
    </QuoteProvider>
  );
}

export default App;