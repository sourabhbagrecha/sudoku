// import { set } from "react-native-reanimated";
import levels from '../constants/levelsConfig.json';

export default (sudoku, level) => {
  const blanks = levels.find(x => x.title === level)['blanks'];
  const sets = [];
  const blankSets = [];
  for(let row=0; row<9; row++){
    for(let cell=0; cell<9; cell++){
      sets.push({ row, cell });
    }
  };
  //removing at least one from each row
  for( let i=0; i<9; i++){
    const rowSet = sets.map((s, setsIndex) =>  ({...s, setsIndex})).filter(x => x.row === i);
    const randIndex = rowSet[Math.floor(Math.random()*rowSet.length)]['setsIndex'];
    blankSets.push(sets.splice(randIndex, 1)[0]);
  };
  //removing at least one from column
  for( let i=0; i<9; i++){
    const colSet = sets.map((s, setsIndex) =>  ({...s, setsIndex})).filter(x => x.cell === i);
    const randIndex = colSet[Math.floor(Math.random()*colSet.length)]['setsIndex'];
    blankSets.push(sets.splice(randIndex, 1)[0]);
  };
  //removing remaining blanks
  for(let i=0; i<(blanks-18); i++){
    const randIndex = Math.floor(Math.random()*sets.length);
    blankSets.push(sets.splice(randIndex, 1)[0])
  };
  const puzzle = sudoku.map(s => s);
  blankSets.forEach(b => {
    puzzle[b.row][b.cell] = 0;
  });
  return puzzle;
}