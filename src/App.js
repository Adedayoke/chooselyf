import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/account_create/Signup';
import Input_name from './pages/account_create/Input_name';
import Goals from './pages/account_create/Goals';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route path='/account'>
            <Route path='/account/create'>
              <Route element={<Input_name/>} path='/account/create/input_name'/>
              <Route element={<Goals/>} path='/account/create/goals'/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
