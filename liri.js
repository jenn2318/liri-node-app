
var Twitter = require ('twitter');
//var env = require('dotenv');
var Spotify = require ('node-spotify-api');
var request = require ('request');
var omdb = require ('omdb');

var fs = require ('fs');
var keys = require ('./keys.js');
var commandList = process.argv[2];
var userChoice = process.argv[3];
var parameter = {screen_name: 'JPCoder777'};
var spotifyParam = {user_name: 'jshaun300'};


//var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);



switch (commandList) {
  case 'my-tweets':
  doTweetFeed();
  break;
  case 'spotify-this-song':
  spotifyThisSong(userChoice);
  break;
  case 'movie-this': 
  movieGrab(userChoice);
  break;
  case 'do-what-it-says':
  doWhatItSays();
  break;
}


function doTweetFeed() {

  //Call to Twitter API to get timeline information
  client.get('statuses/user_timeline', { screen_name: 'JPCoder777' }, function(error, tweets, response) {
      if (!error) {
          for (var i = 0; i < tweets.length; i++) {
              var tweetsText = (tweets[i].text);
              var tweetsCreated = (tweets[i].created_at);
              console.log("my-tweets: " + JSON.parse(tweets[i].text, null, 2));
              console.log(tweets[i].created_at);
              console.log("Tweet:" + tweets[i].text);
              //console.log ('Time' + tweets[i].created_at);
              console.log("It worked!");
              //console.log(tweets[i].text);
          }
      } else {
          //error message to display if error found
          console.error("Ooops it didn't work!");
          console.log("Error Status Code = " + response.statusCode);
      }
  });
};

function spotifyThisSong(userInput) {
  //User will select a song, if they do not a default song will be chosen for them.
  if (userInput === undefined) {
     song = "I Saw The Sign, Ace Of Base";

  } else {  
      if (userChoice === "Escapade by Janet Jackson")
         //userChoice = "Sweet Caroline by Neil Diamond"
         console.log(userInput);
  }
  spotify.search({ type: "track", query: userChoice}, function(err, data) {
    if (err) {
      console.log('err', err);
    } else {
      //for (var i = 0; i < data.tracks.items.length; i++) {
      console.log(data.tracks.items[0]);
      console.log("spotify-this-song: " + JSON.parse(data.tracks.items[i].text, null, 2));
      console.log('-----');
      console.log('data', data);
      console.log("Artist: " + data.tracks.items[0].artists[0].name);
       console.log("Song Name: " + data.tracks.items[0].name);
       console.log("Link: " + data.tracks.items[0].external_urls.spotify);
       console.log("Album Name: " + data.tracks.items[0].album.name);
      
      }
    //}
  });
};


function doWhatItSays() {
fs.readFile('./random.txt', 'utf8', function(err, data) {
  if (err) {
    console.log(err);
  } else
  console.log('data', data);
  //console.log(data.toString());
});

		

//function movieGrab (userChoice) { 

  //if (userChoice === undefined) {
    //   movieTitle = "Mr Nobody"; 
  //}
//queryUrl =  "http://www.omdbapi.com/?t=" + userChoice + "&y=&plot=short&apikey=" + keys.omdb.key;

//request ("http://www.omdbapi.com/?t=" + (userChoice || 'Mr Nobody') + "&y=&plot=short&apikey=" , function (error, response, body) { 

  // if (!error && response.statusCode === 200) {
    //   console.log('');
      // console.log ('Title' + JSON.parse(body).Title);
       //console.log('Year: '+ JSON.parse(body).year);
       //console.log('IMDB Rating: '+ JSON.parse(body).imdRbating);
       //console.log('Rotten Tomatoes Rating:' + JSON.parse(body).tomatoRating);
       //console.log('Rotten Tomatoes URL: ' + JSON.parse(body).tomatoURL);
       //console.log ('Country: ' + JSON.parse(body).Country);
       //console.log('Language: ' + JSON.parse(body).Language);
       //console.log('Plot: ' + JSON.parse(body).Plot);
       //console.log('Actors:' + JSON.parse(body).Actors);
       //console.log('');


  // } else {
    //console.log(err);
   //} 
   //}
//});
