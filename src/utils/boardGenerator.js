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
  for(let i=0; i<blanks; i++){
    const randIndex = Math.floor(Math.random()*sets.length);
    blankSets.push(sets.splice(randIndex, 1)[0])
  }
  const puzzle = sudoku.map(s => s);
  blankSets.forEach(b => {
    puzzle[b.row][b.cell] = 0;
  });
  return puzzle;
}