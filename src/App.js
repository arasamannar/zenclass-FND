import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to Zen class
      </header>
      <main>
        <Login></Login>
      </main>

    </div>
  );
}

export default App;
