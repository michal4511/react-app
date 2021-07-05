import './App.css';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Searching databases</h1>
        <SearchBar placeholder="Enter a Customer Name..." />
      </header>
    </div>
  );
}

export default App;
