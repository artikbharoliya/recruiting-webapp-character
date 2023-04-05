import { Button, Grid } from "@mui/material";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const AttributeControl = ({ attribute }) => {

  const [attributes, setAttributes] = useContext(PlayerContext);

  const handleIncrement = () => {
    let attributeInitialValue = attributes[attribute];
    let newState = {
      ...attributes,
      [attribute]: attributeInitialValue + 1,
    }
    setAttributes(newState);
  }
  const handleDecrement = () => {
    let attributeInitialValue = attributes[attribute];
    let newState = {
      ...attributes,
      [attribute]: attributeInitialValue - 1,
    }
    setAttributes(newState);
  }
  return (
    <Grid container>
      <Button
        variant="outlined"
        onClick={handleDecrement}
      > - </Button>
      <Grid sx={{ minWidth: "20ch" }}>{attribute} : {attributes[attribute]}</Grid>
      <Button
        variant="outlined"
        onClick={handleIncrement}
      > + </Button>
    </Grid>
  );
}

const PlayerControls = () => {
  return (
    <Grid container>
      <AttributeControl attribute="Strength" />
      <AttributeControl attribute="Dexterity" />
      <AttributeControl attribute="Constitution" />
      <AttributeControl attribute="Intelligence" />
      <AttributeControl attribute="Wisdom" />
      <AttributeControl attribute="Charisma" />
    </Grid>
  );
}

export default PlayerControls;
