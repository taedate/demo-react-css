import './App.css';
import "./input.css"
import { Routes, Route} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import DetailsPage from './pages/DetailsPage';
import Navbar from './componants/Navbar';

function App() {
  return (
    <div className='bg-gradient-to-b from-[#FDFEFE] to-[#566573] h-screen'>
      <Navbar>

      </Navbar>
      <Routes>
        <Route path="/" element = {<LandingPage />} ></Route>
        <Route path="/details" element = {< DetailsPage />} ></Route>
        <Route path="/navbar" element = {< Navbar />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
