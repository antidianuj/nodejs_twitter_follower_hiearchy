
var getTwitterFollowers=require('get-twitter-followers');
const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'out.csv',
  header: [
    {id: 'source', title: 'Source'},
    {id: 'target', title: 'Target'},
  ]
});

var tokens={
  consumer_key: '',
  consumer_secret: '',
  access_token: '',
  access_token_secret: ''
};



var source=[]
var target=[]



getTwitterFollowers(tokens, 'runner1256').then(followers => {
  const lenny=followers.length;

  const big_data=[];

  for (let i = 0; i < lenny; i++) {
  source.push('runner1256');
  target.push(followers[i]['screen_name']);
  console.log(followers[i]['screen_name']); 

  big_data.push({"source": 'runner1256', "target": followers[i]['screen_name']});
  }

  console.log(big_data)


  csvWriter
  .writeRecords(big_data)
  .then(()=> console.log('The CSV file was written successfully'));



  //88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

const targeter=target.slice() 
console.log(targeter.length)

for (let j=0; j< targeter.length; j++)
{
  var sourcr=[]
  var targetr=[]
  getTwitterFollowers(tokens, targeter[j]).then(followers => {
  const lenny=followers.length;
  
  console.log(followers);

  for (let i = 0; i < lenny; i++) {
  sourcr.push(targeter[j]);
  targetr.push(followers[i]['screen_name']);
  console.log(followers[i]['screen_name']); 

  big_data.push({"source": targeter[j], "target": followers[i]['screen_name']});
  }

  console.log(big_data)


  csvWriter
  .writeRecords(big_data)
  .then(()=> console.log('The CSV file was written successfully'));
  
 });
 }
  
});

