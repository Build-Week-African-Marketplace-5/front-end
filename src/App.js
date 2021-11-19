import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/index';
import LoginPage from './pages/login';
import Signup from './components/Login/Signup';
import { useState, useEffect} from 'react';
import AddItem from './components/AddItem';
import schema from './validation/formSchema';
import * as yup from 'yup';
import ItemPage from './components/ItemPage';  
import PrivateRoute from './PrivateRoute';
import TotalItems from './components/TotalItems';

let isLoggedIn = localStorage.getItem("token");

console.log((isLoggedIn ? 'Yes Logged In' : 'Not Logged In'));





const initialFormValues = {
  username: '',
  password: '',
}

const initialFormErrors = {
  username: '',
  password: '', 
}

const initialDisabled = true;


function App() {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled); 


  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }


  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
  
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={LoginPage} exact/>
        <Route path='/signup' exact>

        <Signup
                values={formValues}
                change={inputChange}
                disabled={disabled}
                errors={formErrors}/>

        </Route>

        <PrivateRoute path='/items' component={ItemPage} exact/>
        <PrivateRoute path='/allitems' component={TotalItems} exact/>
        <Route path='/additem' exact>
          <AddItem/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;