const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/shout', (req, res) => {
  let name=req.query.name;
  let upperCaseName=name.toUpperCase();
  res.send(upperCaseName)
});

app.get('/fullname',(req,res)=>{
  let firstName=req.query.firstname;
  let lastName=req.query.lastname;
  res.send(firstName+' '+lastName);
})

app.get('/date',(req,res)=>{
  let month=req.query.month;
  let year=req.query.year;
  res.send(month+', '+year);
})

app.get('/greet',(req,res)=>{
  let name=req.query.name;
  res.send('Namsate, '+name);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
