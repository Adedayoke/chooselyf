import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Signup/>} path='/signup'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
