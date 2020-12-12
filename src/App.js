import './App.css';
import {Link, Switch, Route} from 'react-router-dom'
import Home from './screens/Home/Home'

function App() {
  return (
    <div className="App">
      <Switch>
           <Route exact path='/'>
              <Home/>
           </Route>
      </Switch>
    </div>
  );
}

export default App;
