import './App.css';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Localizacao from './Localizacao/Localizacao';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sobre" element={<About />}></Route>
          <Route path="/localizacao" element={<Localizacao />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
