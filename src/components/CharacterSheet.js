import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { SKILL_LIST } from "../consts";

// Calculations are broken down in functions to allow future modifications
const findAttributeAssociatedWithSill = (skill) => {
  return skill.attributeModifier;
}

const calculateAttributeModifiers = (attributeValue) => {
  return Math.floor((attributeValue - 10) / 2);
}

const calculatePoints = (attributeModifier) => {
  return (10 + (4 * attributeModifier));
}


const calculateSkillValue = (numberOfAttributeModifier, spend) => {
  return numberOfAttributeModifier + spend;
}

const CharacterSheet = () => {

  const [characterSheet, setCharacterSheet] = useState([]);
  const [attributes] = useContext(PlayerContext);

  useEffect(() => {
    // Calculating all the properties of the character sheet
    const characterData = [];
    SKILL_LIST.map((skill) => {
      let attrModifier = findAttributeAssociatedWithSill(skill);
      let numberOfAttributeModifier = calculateAttributeModifiers(attributes[attrModifier]);
      let points = calculatePoints(numberOfAttributeModifier);
      // Assuming that the player can use all the points for a skill
      let spend = points;
      let skillValue = calculateSkillValue(numberOfAttributeModifier, spend);
      let skillData = {
        attrModifier,
        numberOfAttributeModifier,
        points,
        spend,
        skillValue
      }
      characterData.push({ skill: skill.name, skillData });
      return characterData;
    });
    console.log(characterSheet);
    setCharacterSheet(characterData);

  }, [attributes]);

  return (
    <Grid container sx={{ maxWidth: '750px' }} justifyContent='center'>
      <Button variant="outlined" sx={{ my: 3 }}>Save Character Data</Button>
      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Skill</TableCell>
              <TableCell align="right">Spend</TableCell>
              <TableCell align="right">Points</TableCell>
              <TableCell align="right">Modifier</TableCell>
              <TableCell align="right">Modifier Count</TableCell>
              <TableCell align="right">Skill Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>

  );
}

export default CharacterSheet;
