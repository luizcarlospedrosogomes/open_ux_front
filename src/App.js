import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';

import {MenuTop, MenuLateral} from './Components/Menus'
import {HeatMap, Details as DetailsHeatMap} from './Components/heatMap'

function App() {
  return (
    <div className="App">
        
      <MenuTop/>      
      <MenuLateral/>      
      <BrowserRouter>       
        <Switch>
          <Route exact path="/" component={HeatMap} />
          <Route path="/heatmap/:id" component={DetailsHeatMap}/> 
        </Switch>
      </ BrowserRouter>
    </div>
  );
}

export default App;
