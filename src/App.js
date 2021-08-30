import './App.css';
import Nav from './components/nav';
import Home from './components/home';
import Address from './components/address';
import Users from './components/users';
import Login from './components/login';
import Register from './components/register';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import PageNotFound from './components/pageNotFound';
import AddAddress from './components/addAddress';
import UpdateAddress from './components/updateAddress';
import Counter from './components/counter';


function App() {
  return (
    <div className="App">
        <Nav/>
        <Switch>
        
          <Route exact path="/address" component = {Address}/>
          <Route exact path="/user" component = {Users}/>
          <Route exact path="/login" component = {Login}/>
          <Route exact path="/register" component = {Register}/>
          <Route exact path="/address/add" component={AddAddress}/>
          <Route exact path="/address/update/:id" component={UpdateAddress} />
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />
          <Redirect from="/home" to="/"/>
          <Route component={PageNotFound}/>
          
        </Switch>
    </div>
  );
}

export default App;
