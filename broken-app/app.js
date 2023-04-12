const express = require('express');
const axios = require('axios');
const app = express();


app.use(express.json());

app.post('/', async function(req, res, next) {
  try {
    let results = req.body.developers.map(async d => {
      axios.get(`https://api.github.com/users/${d}`);
    });
   
    let output = await Promise.all(results) 
    
    let out = output.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(JSON.stringify(out));
  
  } catch (err) {
    next(err);
  }
});

app.listen(3000, function(){
  console.log('Started on http://localhost:3000');
});
