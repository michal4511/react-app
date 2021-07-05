import {Switch, Route} from 'react-router-dom';

// styles & data
import './App.css';

// components
import TheNavigation from './Components/TheNavigation';

//views

import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TheNavigation/>
      </header>
      <main>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
