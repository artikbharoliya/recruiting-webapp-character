import { Grid } from "@mui/material";
import CharacterClass from "../components/CharacterClass";
import PlayerControls from "../components/PlayerControls";

const GamePage = () => {
  return (
    <Grid container direction="column">
      <Grid container justifyContent="space-around" >
        <CharacterClass characterName="Barbarian" minAttributes={{
          'Strength': 14,
          'Dexterity': 9,
          'Constitution': 9,
          'Intelligence': 9,
          'Wisdom': 9,
          'Charisma': 9,
        }} />
        <CharacterClass characterName="Wizard" minAttributes={{
          'Strength': 9,
          'Dexterity': 9,
          'Constitution': 9,
          'Intelligence': 14,
          'Wisdom': 9,
          'Charisma': 9,
        }} />
        <CharacterClass characterName="Bard" minAttributes={{
          'Strength': 9,
          'Dexterity': 9,
          'Constitution': 9,
          'Intelligence': 9,
          'Wisdom': 9,
          'Charisma': 14,
        }} />
      </Grid>
      <Grid sx={{ mt: 6 }} >
        <PlayerControls />
      </Grid>
    </Grid>
  );
}

export default GamePage;