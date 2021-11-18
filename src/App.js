import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/index';
import LoginPage from './pages/login';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={LoginPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;