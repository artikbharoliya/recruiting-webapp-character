import { useContext, useEffect, useState } from "react";
import { Card, Grid } from "@mui/material";
import { PlayerContext } from "../context/PlayerContext";

const CharacterClass = ({ characterName, minAttributes }) => {

  // const [attributes] = useContext(PlayerContext);
  const [isAchievable, setIsAchievable] = useState(false);
  const [attributes] = useContext(PlayerContext);

  useEffect(() => {
    console.log(attributes);
    console.log(JSON.stringify(minAttributes));
  }, []);

  return (
    <>
      <div>{characterName}</div>
    </>
  );
}

export default CharacterClass;