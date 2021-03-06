# Overview

LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. LIRI will make calls to the Twitter, Spotify and OMDB APIs, using NPM packages to bring back data based on commands the user enters in the command line used as parameters.

# Tech/framework used

Built with :
* Node JS

IDE:
* Visual Studio Code


# Instructions

1. Navigate to the root of your project and run npm init -y — this will initialize a package.json file for your project. The package.json file is required for installing third party npm packages and saving their version numbers. If you fail to initialize a package.json file, it will be troublesome, and at times almost impossible for anyone else to run your code after cloning your project.

2. Make a .gitignore file and add the following lines to it. This will tell git not to track these files, and thus they won't be committed to Github.

node_modules
.DS_Store
.env

![.gitignore example](images/screenshot-01.png)


Make a JavaScript file named keys.js.
------------------------------------------------------------------------------------------------------------------------------
Inside keys.js your file will look like this:

![keys.js example](images/screenshot-02-02.png)

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

------------------------------------------------------------------------------------------------------------------------------
1. Next, create a file named .env, add the following to it, replacing the values with your API keys (no quotes) once you have them:

## Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

## Twitter API keys

TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret


This file will be used by the dotenv package to set what are known as environment variables to the global process.env object in node. These are values that are meant to be specific to the computer that node is running on, and since we are gitignoring this file, they won't be pushed to github — keeping our API key information private.
If someone wanted to clone your app from github and run it themselves, they would need to supply their own .env file for it to work.

------------------------------------------------------------------------------------------------------------------------------
# Twitter Section 

Get your Twitter API keys by following these steps:

Step One: Visit https://apps.twitter.com/app/new
Step Two: Fill out the form with dummy data. Type http://google.com in the Website input. Don't fill out the Callback URL input. Then submit the form.

![my-tweets](images/screenshot-03.png)

Step Three: On the next screen, click the Keys and Access Tokens tab to get your consume key and secret. 

Copy and paste them into your .env file, replacing the your-twitter-consumer-key and your-twitter-consumer-secret placeholders.

Step Four: At the bottom of the page, click the Create my access token button to get your access token key and secret. 


Copy the access token key and secret displayed at the bottom of the next screen. Paste them into your .env file, replacing the placeholders for your-twitter-access-token-key and your-twitter-access-token-secret.



## Random Text 

Make a file called random.txt.
------------------------------------------------------------------------------------------------------------------------------

![do-what-it-says](images/screenshot-04.png)

Inside of random.txt put the following in with no extra characters or white space:

spotify-this-song,"I Want it That Way"


Make a JavaScript file named liri.js.
------------------------------------------------------------------------------------------------------------------------------
At the top of the liri.js file, add code to read and set any environment variables with the dotenv package:

require("dotenv").config();

Add the code required to import the keys.js file and store it in a variable.

You should then be able to access your keys information like so

 * var spotify = new Spotify(keys.spotify);
 * var client = new Twitter(keys.twitter);

![liri.js dotenv example](images/screenshot-04-02.png)

# Commands

Make it so liri.js can take in one of the following commands:

* `my-tweets`

* `spotify-this-song`
* `movie-this`

* `do-what-it-says`

What Each Command Should Do
------------------------------------------------------------------------------------------------------------------------------

## Twitter

node liri.js my-tweets

![my-tweets example](images/screenshot-06.png)

This will show your last 20 tweets and when they were created at in your terminal/bash window.


## Spotify Information

node liri.js spotify-this-song '<song name here>'
 
![spotify-this-song](images/screenshot-05-02.png)

This will show the following information about the song in your terminal/bash window
------------------------------------------------------------------------------------------------------------------------------

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from

![spotify command example](images/screenshot-05-01.png)

If no song is provided then your program will default to "The Sign" by Ace of Base.
You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.
Like the Twitter API, the Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:
Step One: Visit https://developer.spotify.com/my-applications/#!/
Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.
Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the node-spotify-api package.



# Movie Information

node liri.js movie-this '<movie name here>'

This will output the following information to your terminal/bash window:
------------------------------------------------------------------------------------------------------------------------------
   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.

![movie-this example](images/screenshot-07.png)

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/

It's on Netflix!

You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.


# Random Text

node liri.js do-what-it-says

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
------------------------------------------------------------------------------------------------------------------------------

It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
Feel free to change the text in that document to test out the feature for other commands.

![do-what-it-says example](images/screenshot-08.png)
