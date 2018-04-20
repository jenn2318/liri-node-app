require('dotenv').config();

console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};







//var twitter = require ('twitter');
 
//var client = new Twitter({
  //consumer_key: '',
  //consumer_secret: '',
  //access_token_key: '',
  //access_token_secret: ''
//});
 
//var params = {screen_name: 'nodejs'};
//client.get('statuses/user_timeline', params, function(error, tweets, response) {
  //if (!error) {
    //console.log(tweets);
  //}
//});

//var client = new Twitter({
    //consumer_key: process.env.TWITTER_CONSUMER_KEY,
    //consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    //access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    //access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  //});

 //var argumentOne = process.argv['my tweets'];
 
//var request = require ('request');
//request("http://.omdbapi.com/?t=wolf+of+wallstreet&y=&plot=full&apikey=50483e6b", function(error, response,body) {
  // if (!error && response.statusCode === 200) {
    //   console.log("The movie's rating" + JSON.parse(body).imdbRating);
   //}
//});
 
//var argOne = process.argv['spotify-this-song'];
//if (argOne === ('Notion by Tash Sultana')); {
  //console.log(argOne);
//}

//var argTwo = process.argv['spotify-this-artist'];
//if (argTwo === "Michael Jackson") {
  //  console.log(argTwo);
//}

//var env = require('env')();
//let spotifyClientId = env.get('spotifyClientID');
//let clientSecret = env.get('spotifyClientSecret');

//var spotify = require ('node-spotify-api');
//var spotify = new Spotify({
  //  id: <your spotify client id>,
    //secret: <your spotify client secret>
 // });
   
  //spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    //  if (err) {
      //return console.log('Error occurred: ' + err);
    //}
   
  //console.log(data); 
  //});