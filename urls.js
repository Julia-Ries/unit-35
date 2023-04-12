const fs = require('fs');
const process = require('process');
const axios = require('axios');


function linksOutput(file, data) {
      fs.writeFile(file, data, 'utf8', function(err) {
        if (err) {
          console.error(`Couldn't write ${file}`);
        
        } else 
      console.log(`Done writing ${file}`);
    });
}
  

function links(path) {
    fs.readFile(path, 'utf8', async function(err, data) {
      if (err) {
        console.error(`Error reading ${path}: ${err}`);
        process.exit(1);
      } 
        linksURL(data);
      
    });
  }


async function linksURL(data){
    let urls = data.split("\n").filter((u) => u !== "");
    
    for (let url of urls) {
        let resp; 

        try {
            resp = await axios.get(url);
        } catch {
            console.error(`Couldn't download ${url}`);
            continue;
        }
        let fileName = new URL (url).hostname;
        linksOutput(fileName, resp.data);
    }
}
links(process.argv[2]);