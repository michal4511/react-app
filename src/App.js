import './App.css';
import SearchBar from './Components/SearchBar';
import CustomerData from './MOCK_DATA.json';
import {Switch, Route, NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tunes">Tunes</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        
      </header>
      <main>
        <Switch>
          <Route path="/" render={() => <h1>Search databases</h1>} exact/>
          <Route path="/tunes" render={() => <h1>Tunes</h1>} />
          <Route path="/about" render={() => <h1>About</h1>} />
        </Switch>

        <SearchBar placeholder="Enter a Customer Name..." data={CustomerData}/>
      </main>
    </div>
  );
}

export default App;
