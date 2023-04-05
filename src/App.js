import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import PlayerContext from './context/PlayerContext';
import GamePage from './pages/GamePage';


function App() {
  const [num, setNum] = useState(0);
  return (
    <PlayerContext>
      <div className="App">
        <GamePage />
      </div>
    </PlayerContext>
  );
}

export default App;
