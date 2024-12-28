import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Find your dish!</h1>
                <SearchBar/>
            </header>
        </div>
    );
}

export default App;
