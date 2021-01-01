import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import './App.css';
import {MenuTop, MenuLateral} from './Components/Menus'
import {HeatMap, Details as DetailsHeatMap, New as HeatMapNew} from './Components/heatMap'
import {Login, Logout} from './Components/user'

import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  
  <Route
    {...rest}
    render={props =>      
      isAuthenticated() ? (
        <>
          <MenuTop/>      
          <MenuLateral/>  
          <Component {...props} />
        </>
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>       
        <Switch>          
          <Route exact path="/" component={Login}/> 
          <Route path="/login" component={Login}/> 
          <PrivateRoute path="/heatmaps" component={HeatMap} />
          <PrivateRoute path="/logout" component={Logout} />
          <PrivateRoute exact path="/heatmap/new" component={HeatMapNew} />
          <PrivateRoute exact path="/heatmap/:id" component={DetailsHeatMap} />
          
          <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
      </ BrowserRouter>
    </div>
  );
}

export default App;
