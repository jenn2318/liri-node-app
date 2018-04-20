

var twitter = require ('twitter');
var env = require('env');
var nodepSpotifyAPI = require ('node-spotify-api');
var request = require ('request');
var omdb = require ('omdb');
var fs = require ('fs');
var keys = require ('./keys.js');
var commandsToDo = process.argv[2];
var userChoice = process.argv[3];

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);




//if (nodeArgument[2] === 'my-tweets'){
 // showTweets();
//} else if (argumentOne[2] === 'spotify-this-song') {
  //showSpotify();
//} else if (argumentOne[2] === 'movie-this') {
  //showOMDB();
//} else {
  //console.log("missing arg information");
  //return;
//}

switch (commandsToDo) {
  case 'my-tweets':
  myTweets();
  break;
  case 'spotify-this-song':
  spotifyThisSong(userChoice);
  break;
  case 'movie-this': 
  movieThis(userChoice);
  break;
  case 'do-what-it-says':
  doWhatItSays('do-what-it-says');
  break;
}



function myTweets() {

  //Call to Twitter API to get the user's timeline
  client.get('statuses/user_timeline', { screen_name: 'JPCoder777' }, function(error, tweets, response) {
      if (!error) {
          for (var i = 0; i <= 3; i++) {
              console.log("Me Tweets: " + JSON.stringify(tweets[i].text, null, 2));
              console.log(tweets[i].created_at);
              console.log("It worked!");
          }
      } else {
          //error message if there is a error
          console.error("Ooops it didn't work!");
          console.log("Error Status Code = " + response.statusCode);
      }
  });
};

function spotifyThisSong(userInput) {
  //User will select a song, if they do not a default song will be chosen for them.
  if (userInput === undefined) {
      userChoice = "Jungle by Tash Sultanta";
      console.log("Do you want Jungle by Tash Sultana? " + userInput);
  }
  spotify.search({ type: "track", query: userInput }, function(err, data) {
      // console.log(data.tracks.items[0]);
      console.log("Artist: " + data.tracks.items[0].artists[0].name);
      console.log("Song Name: " + data.tracks.items[0].name);
      console.log("Link: " + data.tracks.items[0].external_urls.spotify);
      console.log("Album Name: " + data.tracks.items[0].album.name);
      console.log("------------------------");
  });
};


function movieThis(userChoice) {

  var title = 'The Wolf of Wall Street';

  request("http://www.omdbapi.com/?apikey=50483e6b=" + title, function(error, response, body){

      if (!error) {

          var body = JSON.parse(body);

          console.log("Title: " + body.Title);
          console.log("Year: " + body.Year);
          console.log("IMDb Rating: " + body.imdbRating);
          console.log("Rotten Tomatoes Rating: " + body.rottenTomatoes)
          console.log("Country: " + body.Country);
          console.log("Language: " + body.Language);
          console.log("Plot: " + body.Plot);
          console.log("Actors: " + body.Actors);

          if (userChoice === undefined) {
           userChoice = 'Mr. Nobody';
           console.log("Watch this movie!");
          }
          

      }

  });
  
}




//request("http://.omdbapi.com/?t=the+wolf+of+wall+street&y=&plot=full&apikey=50483e6b", function(error, response,body) {
  // if (!error && response.statusCode === 200) {
    //   console.log("The movie's rating" + JSON.parse(body).imdbRating);
   //}
//});

 



