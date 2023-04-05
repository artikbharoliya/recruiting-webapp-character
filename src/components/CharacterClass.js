import { useContext, useEffect, useState } from "react";
import { Card, Collapse, Grid } from "@mui/material";
import { PlayerContext } from "../context/PlayerContext";

const PrintableAttributes = ({ minAttributes }) => {
  const attr = Object.entries(minAttributes)
    .map(([key, value]) => <p key={key}>{`${key}: ${value}`}</p>)
  return attr;
}

const CharacterClass = ({ characterName, minAttributes }) => {
  const [isAchievable, setIsAchievable] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [attributes] = useContext(PlayerContext);


  useEffect(() => {
    function compareAttributes() {
      for (let key in minAttributes) {
        if (attributes[key] < minAttributes[key]) {
          return false;
        }
      }
      return true;
    }
    setIsAchievable(compareAttributes());
  }, [attributes, minAttributes]);

  return (
    <>
      <Grid>
        <Card variant="outlined" sx={{ p: 4, backgroundColor: `${isAchievable ? "#7AA874" : "#CE5959"}` }} onClick={() => setExpanded(!expanded)}>
          {characterName}
        </Card >
        <Collapse in={expanded}>
          <Card variant="outlined" sx={{ p: 4, textAlign: 'center' }}>
            Minimum Attributes:
            <PrintableAttributes minAttributes={minAttributes} />
          </Card >
        </Collapse>
      </Grid>

    </>
  );
}

export default CharacterClass;
