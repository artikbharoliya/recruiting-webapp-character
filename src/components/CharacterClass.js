import { useContext, useEffect, useState } from "react";
import { Card, Grid } from "@mui/material";
import { PlayerContext } from "../context/PlayerContext";

const CharacterClass = ({ characterName, minAttributes }) => {

  // const [attributes] = useContext(PlayerContext);
  const [isAchievable, setIsAchievable] = useState(true);
  const [attributes] = useContext(PlayerContext);

  useEffect(() => {
    for (var key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        if (attributes[key] < minAttributes[key]) setIsAchievable(false);
      }
    }
  }, [attributes]);

  return (
    <Card variant="outlined" sx={{ p: 4, backgroundColor: `${isAchievable ? "green" : "red"}` }}> {characterName}</Card >
  );
}

export default CharacterClass;