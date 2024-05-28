import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/Login.js';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './screens/Signup.js';
import Cart from './screens/Cart.js';





function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/Signup" element={<Signup />}></Route>

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
