import './App.css';
import Home from './pages/home/home';
import Header from './globalComponents/header/header';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
