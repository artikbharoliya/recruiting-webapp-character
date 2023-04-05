import { Button, Grid } from "@mui/material";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { ATTRIBUTE_LIST } from "../consts";

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
    <Grid
      sx={{ minWidth: "150px", my: 1, px: 2 }}
      container
      justifyContent="center"
      alignItems="center">
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
      {ATTRIBUTE_LIST.map((attribute) => (
        <AttributeControl attribute={attribute} />
      ))}
    </Grid>
  );
}

export default PlayerControls;
