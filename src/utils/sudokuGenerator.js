import boardGenerator from "./boardGenerator";

export default (level="Easy") => {
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
  });
  const solution = sudoku.map(s => s.map(x => x));
  const puzzle = boardGenerator(sudoku, level)
    .map((row, x) => row.map((num, y) => (
    { 
      x,
      y, 
      isFocused: false,
      isClicked: false,
      num
    }
  )));
  return {
    puzzle,
    solution
  }
};