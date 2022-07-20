import logo from './logo.svg';
import './App.css';
import Routes from './Routes/AllRoutes';
import PlusButton from './components/PlusButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <Footer />
      <PlusButton />
    </div>
  );
}

export default App;
