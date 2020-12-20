import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import './App.css';
import {MenuTop, MenuLateral} from './Components/Menus'
import {HeatMap, Details as DetailsHeatMap} from './Components/heatMap'
import {Login} from './Components/user'

import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

function App() {
  return (
    <div className="App">
        
      <MenuTop/>      
      <MenuLateral/>      
      <BrowserRouter>       
        <Switch>          
          <Route exact path="/" component={Login}/> 
          <Route path="/login" component={Login}/> 
          <PrivateRoute path="/heatmaps" component={HeatMap} />
          <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
      </ BrowserRouter>
    </div>
  );
}

export default App;
