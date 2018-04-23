
var Twitter = require ('twitter');
//var env = require('dotenv'); It is already required in keys.js
var Spotify = require ('node-spotify-api');
var request = require ('request');
//var omdb = require ('omdb');

var fs = require ('fs');
var keys = require ('./keys.js');
var commandList = process.argv[2];
var userChoice = process.argv[3];
var parameter = {screen_name: 'JPCoder777'};
var spotifyParam = {user_name: 'jshaun300'};


//var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);
var omdb = keys.omdb;
console.log('omdb', omdb);



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
              console.log("my-tweets: " + tweets[i].text, null, 2);
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
}

function spotifyThisSong(userInput) {
  //User will select a song, if they do not a default song will be chosen for them.
  if (userInput === undefined) {
    userInput = "I Saw The Sign, Ace Of Base";

  } else {  
      if (userChoice === "Escapade by Janet Jackson"){
         //userChoice === "Sweet Caroline by Neil Diamond" I used this for a test and it worked
         console.log("*********", userInput);
      }
  }
  spotify.search({ type: "track", query: userChoice}, function(err, data) {
    if (err) {
      console.log('err', err);
    } else {
      for (var i = 0; i < 1; i++) {
      // console.log(data.tracks.items[0]);
      // console.log("spotify-this-song: " + data.tracks.items[i].text);
      console.log('-----');
      // console.log('data', data.tracks.items[0]);
      console.log("Artist: " + data.tracks.items[0].artists[0].name);
       console.log("Song Name: " + data.tracks.items[0].name);
       console.log("Link: " + data.tracks.items[0].external_urls.spotify);
       console.log("Album Name: " + data.tracks.items[0].album.name);
      
     }
    }
  });
}


function doWhatItSays() {
  fs.readFile('./random.txt', 'utf8', function(err, data) {
    if (err) {
      console.log(err);
    } else
    console.log('data', data);
    //console.log(data.toString());
  });
}
		
function movieGrab (userChoice) { 
  request ("http://www.omdbapi.com/?t=" + (userChoice || 'Mr Nobody') + "&y=&plot=short&apikey=" + omdb.key, function (error, response, body) { 
  
    if (!error && response.statusCode === 200) {
        body = JSON.parse(body);
        console.log('Title', body.Title);
        console.log('Year: ', body.Year);
        console.log('IMDB Rating: '+ body.imdbRating);
        console.log('Rotten Tomatoes Rating:' + body.Ratings[1].Value);
        console.log('Rotten Tomatoes URL: ' + body.Website);
        console.log('Country: ' + body.Country);
        console.log('Language: ' + body.Language);
        console.log('Plot: ' + body.Plot);
        console.log('Actors:' + body.Actors);
    } else {
        console.log("error", error);
    } 
  });
}
