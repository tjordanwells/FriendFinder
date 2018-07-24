# Friend Finder App

## A compatibility-based "dating" application

### Summary

This application requires the user to fill out a survey in order to take their "scores".

User data is stored in an object, that is sent to the friends.js /api/friends

```json
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
```

The API takes the user data and compares their "scores" array against all of the other "scores" arrays in the API. The survey will then output the users closest match based on the lowest difference of total scores.

### Install

```
git clone git@github.com:tjordanwells/FriendFinder.git
cd FriendFinder
npm i
```

This will clone the repository, take you into the directory and install all of the npm dependencies required to run the application.

Then enter:

```
node server.js
```

and go to ```localhost:3000``` in your browser

### Demo

OR demo it online following https://radiant-ridge-21550.herokuapp.com/ - automatic!
[this](https://radiant-ridge-21550.herokuapp.com/) link.




