import './App.css';
import GamePage from './pages/GamePage';
import PlayerContextProvider from './context/PlayerContext';


function App() {
  return (
    <PlayerContextProvider>
      <div className="App">
        <GamePage />
      </div>
    </PlayerContextProvider>
  );
}

export default App;
