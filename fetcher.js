const request = require('request');
const readline = require('readline');
const fs = require('fs');

// const r1 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const pageFetcher = (url, destination) => {
  request(url, (error, response, body) => {
    if (error) {
      console.log('error:', error); // Print the error if one occurred
      return;
    }

    // if (response.statusCode != 200){
    //   console.log('statusCode:', response.statusCode); // Print the response status code if a response was received
    //   return;
    // }

    // console.log('body:', body); // Print the HTML for the Google homepage.
    console.log('writing file');
    fs.writeFile(destination, body, err => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(`Downloaded and saved ${body.length} bytes to ${destination}`);
    })
  })
}

const args = process.argv.slice(2);
console.log(args);
pageFetcher(args[0], args[1]);