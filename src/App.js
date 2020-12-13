import './App.css';
import {Link, Switch, Route} from 'react-router-dom'
import Home from './screens/Home/Home'
import About from './screens/About/About'
import Projects from './screens/Projects/Projects';
import Contact from './screens/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Switch>
           <Route exact path='/'>
              <Home/>
           </Route>
        
        <Route path='/about-me'>
          <About/>
           </Route>
        
        <Route path='/portfolio'>
          <Projects/>
        </Route>
        
        <Route path='/contact'>
          <Contact/>
           </Route>

      </Switch>
    </div>
  );
}

export default App;
