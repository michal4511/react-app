import './App.css';
import SearchBar from './Components/SearchBar';
import CustomerData from './MOCK_DATA.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Searching databases</h1>
        <SearchBar placeholder="Enter a Customer Name..." data={CustomerData}/>
      </header>
    </div>
  );
}

export default App;
