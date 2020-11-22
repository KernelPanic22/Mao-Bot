const { TwitThread } = require("twit-thread");
const config ={
    consumer_key:         '...',
    consumer_secret:      '...',
    access_token:         '...',
    access_token_secret:  '...',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  };

let fs = require('fs');
fs.readFile('resources/scraped_text.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    var phraseArray=data.split('\n');
    let phrase = chooseRandom(phraseArray);
    tweetThread(phrase);
  });

  async function tweetThread(arr) {
    const t = new TwitThread(config);
    await t.tweetThread(arr);
 }

function chooseRandom(array) {
  return array[Math.floor(Math.random() * array.length)].match(/[\s\S]{1,274}/g);
}
