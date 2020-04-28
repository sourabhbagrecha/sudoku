const moment = require('moment');
const fs = require('fs');

const levels = require('../constants/levelsConfig.json');

const records = [];

levels.forEach(l => {
  for(let i=0; i<3; i++){
    records.push(({
      time: Math.floor(Math.random()*l.difficulty*60*3),
      level: l.title,
      date: moment().subtract(Math.floor(Math.random()*4), 'd').add(Math.floor(Math.random()*24), 'h').format()
    }))
  }
});

fs.writeFileSync('newRecordsData.json', JSON.stringify(records));

console.log(records)