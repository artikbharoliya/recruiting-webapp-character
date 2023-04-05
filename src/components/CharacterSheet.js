import { Alert, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
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
  const [error, setError] = useState(false);

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
    setCharacterSheet(characterData);

  }, [attributes]);

  const handleSubmit = async () => {
    fetch('https://recruiting.verylongdomaintotestwith.ca/api/artikbharoliya/character', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        attributes
      })
    }).then((response) => response.json())
      .then((data) => {
        setError(!(data?.statusCode === 200));
      });

  }


  return (
    <Grid container sx={{ maxWidth: '750px' }} justifyContent='center'>
      <Button variant="outlined" sx={{ my: 3 }} onClick={handleSubmit}>Save Character Data</Button>
      {error && <Alert severity="error">Could not save the data, Please try again</Alert>}
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
            {characterSheet.length > 0 ?
              characterSheet.map((skill) => {
                return (
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {skill.skill}
                    </TableCell>
                    <TableCell align="right">{skill?.skillData?.spend}</TableCell>
                    <TableCell align="right">{skill?.skillData?.points}</TableCell>
                    <TableCell align="right">{skill?.skillData?.attrModifier}</TableCell>
                    <TableCell align="right">{skill?.skillData?.numberOfAttributeModifier}</TableCell>
                    <TableCell align="right">{skill?.skillData?.skillValue}</TableCell>
                  </TableRow>);
              })
              : null}

          </TableBody>
        </Table>
      </TableContainer>
    </Grid>

  );
}

export default CharacterSheet;
