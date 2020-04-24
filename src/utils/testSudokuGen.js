const nums = [1,2,3,4,5,6,7,8,9]
const series = [];
while(nums.length !== 0){
  const randIndex = Math.floor(Math.random()*nums.length);
  series.push(nums[randIndex]);
  nums.splice(randIndex, 1);
}
const pattern = [0, -3, -3, 1, 3, 3, -2, -3, -3];
let patternNew = [];
pattern.map((p, i, arr) => {
  if(i === 0) return patternNew.push(p);
  return patternNew.push(p+patternNew[i-1]);
})
const sudoku = patternNew.map(p => {
  let difference = p;
  if(p<0) difference = (9 + p);
  return series.map((s, j) => series[(difference+j)%9]);
})

const blanks = 37;
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
console.log(puzzle);