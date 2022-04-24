import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LoginScreen from './Components/LoginScreen/LoginScreen';
import MainScreen from './Components/MainScreen/MainScreen';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen/>} />
        <Route path="/home" element={<MainScreen/>} />
      </Routes>
    </Router>
  );
}

export default App;
