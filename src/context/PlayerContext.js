import { createContext, useEffect, useState } from "react";

export const PlayerContext = createContext({});


// Context to store the character data
const PlayerContextProvider = (props) => {
  const [player, setPlayer] = useState({
    'Strength': 14,
    'Dexterity': 9,
    'Constitution': 9,
    'Intelligence': 9,
    'Wisdom': 9,
    'Charisma': 9,
  });

  return (
    <PlayerContext.Provider value={[player, setPlayer]}>
      {props.children}
    </PlayerContext.Provider>
  );
}

export default PlayerContextProvider;

