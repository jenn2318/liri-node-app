

var Twitter = require ('twitter');
//var env = require('dotenv');
var Spotify = require ('node-spotify-api');
var request = require ('request');

var fs = require ('fs');
var keys = require ('./keys.js');
var commandList = process.argv[2];
var userChoice = process.argv[3];
var parameter = {screen_name: 'JPCoder777'};

//var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);



switch (commandList) {
  case 'my-tweets':
  doTweetFeed();
  break;
  case 'spotify-this-song':
  spotifyThisSong(userChoice);
  break;
  case 'movie-this': 
  movieThis(userChoice);
  break;
  case 'do-what-it-says':
  doWhatItSays();
  break;
}



function doTweetFeed() {

  //Call to Twitter API to get timeline information
  client.get('statuses/user_timeline', { screen_name: 'JPCoder777' }, function(error, tweets, response) {
      if (!error) {
          for (var i = 0; i <= 3; i++) {
              console.log("Me Tweets: " + JSON.stringify(tweets[i].text, null, 2));
              //console.log(tweets[i].created_at);
              console.log("It worked!");
          }
      } else {
          //error message to display if error found
          console.error("Ooops it didn't work!");
          console.log("Error Status Code = " + response.statusCode);
      }
  });
};

function spotifyThisSong(commandList, userChoice) {

  //User will select a song, if they do not a default song will be chosen for them.
  if (commandList === "spotify-this-song") {
     var song = userChoice;
   if (song === undefined) {
    //userChoice = "Jungle by Tash Sultanta";
    console.log("Do you want Jungle by Tash Sultana? " + userChoice);
    }    
  }  
  else {
  var songData = response.tracks.items[0]
  spotify.search({ type: "track", query: userChoice}, function(err, data) {
      // console.log(data.tracks.items[0]);
      console.log("Artist: " + data.tracks.items[0].artists[0].name);
      console.log("Song Name: " + data.tracks.items[0].name);
      console.log("Link: " + data.tracks.items[0].external_urls.spotify);
      console.log("Album Name: " + data.tracks.items[0].album.name);
      console.log("-------------------");
  });
 };
};

fs.readFile('./random.txt', 'utf8', function(err, data) {
  if (err) {
    console.log(err);
  }
  //data = question;
  console.log('data', data);
  //song(data);
})



function movieThis(userChoice) {

  //var title = 'The Wolf of Wall Street'

  queryUrl =  "http://www.omdbapi.com/?t=" + userChoice + "&y=&plot=short&apikey=" + omdbKey;

  request(queryUrl, function(error, response, body){

      if (!error) {
          var body = JSON.parse(body);
          console.log("Title: " + body.Title);
          console.log("Year: " + body.Year);
          console.log("IMDb Rating: " + body.imdbRating);
          console.log('rottenRating: ' + movieObject.rottenRating);
			    console.log('rottenURL: ' + movieObject.tomatoURL);
          console.log("Country: " + body.Country);
          console.log("Language: " + body.Language);
          console.log("Plot: " + body.Plot);
          console.log("Actors: " + body.Actors);

          if (userChoice === undefined) {
           userChoice = 'The Wold of Wall Street';
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

 



