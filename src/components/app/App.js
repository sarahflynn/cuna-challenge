import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from '../header/Header';
import Routes from '../../routes/Routes';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
