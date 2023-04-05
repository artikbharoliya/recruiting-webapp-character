import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import GamePage from './pages/GamePage';
import PlayerContextProvider from './context/PlayerContext';


function App() {
  const [num, setNum] = useState(0);
  return (
    <PlayerContextProvider>
      <div className="App">
        <GamePage />
      </div>
    </PlayerContextProvider>
  );
}

export default App;
