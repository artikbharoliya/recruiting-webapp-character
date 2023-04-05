import { createContext, useEffect, useState } from "react";

export const PlayerContext = createContext({});


// Context to store the character data
const PlayerContextProvider = (props) => {
  const [player, setPlayer] = useState({
    'Strength': 0,
    'Dexterity': 0,
    'Constitution': 0,
    'Intelligence': 0,
    'Wisdom': 0,
    'Charisma': 0,
  });

  useEffect(() => {
    fetch('https://recruiting.verylongdomaintotestwith.ca/api/artikbharoliya/character', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json())
      .then((data) => {
        setPlayer(data?.body?.attributes);
      });
  }, []);

  return (
    <PlayerContext.Provider value={[player, setPlayer]}>
      {props.children}
    </PlayerContext.Provider>
  );
}

export default PlayerContextProvider;

