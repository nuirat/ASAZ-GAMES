const express = require("express");
const router = express.Router();
const Game = require("../models/Game");
const User = require("../models/User");
const UserGame = require("../models/UserGame");

// const dummyUsers = require("../dummy/users");
// const dummyGames = require("../dummy/games");
// dummyUsers()
// dummyGames()

router.get("/users/:userId", function (req, res) {
  // to get a user for login
  let userId = req.params.userId;
  User.findById(userId, function (err, user) {
    res.send(user);
  });
});

router.post("/users", function (req, res) {
  // when create an account (register)
  let user = req.body;
  let newUser = new User(user);
  newUser.save();
  res.end();
});

router.post("/games", function (req, res) {
  // add game
  const games = dummyGames();
  games.forEach((g) => {
    let newGame = new Game(g);
    newGame.save();
  });
  res.end();
});

router.get("/games", function (req, res) {
  // to show all games
  Game.find({}, function (err, games) {
    res.send(games);
  });
});

router.get("/games/:gameId", function (req, res) {
  //to show game info
  let gameId = req.params.gameId;
  Game.findById(gameId, function (err, game) {
    res.send(game);
  });
});

router.post("/userGames", function (req, res) {
  // add user game when user start a game
  let userId = req.query.userId;
  let gameId = req.query.gameId;
  let userGame = req.body;
  Game.findById(gameId, function (err, game) {
    userGame.game = game;
    let newUserGame = new UserGame(userGame);
    newUserGame.save();
    User.findByIdAndUpdate(
      userId,
      {
        $push: { userGames: newUserGame },
      },
      { new: true },
      function (err, user) {
        res.send(newUserGame);
      }
    );
  });
});

router.get("/userGames/:userId", function (req, res) {
  // to get all games and all its info for a user
  let userId = req.params.userId;
  User.findById(userId)
    .populate({
      path: "userGames",
      model: "UserGame",
      populate: {
        path: "game",
        model: "Game",
      },
    })
    .exec(function (err, user) {
      console.log(user.userGames);
      res.send(user.userGames);
    });
});

router.put("/userGames", function (req, res) {
  // update score or isWon from state ==> score and isWon from a query
  let userGameId = req.query.userGameId;
  let score = req.body.score;
  let isWon = req.body.isWon;
  UserGame.findByIdAndUpdate(
    userGameId,
    {
      score: score,
      isWon: isWon,
    },
    { new: true },
    function (userGame) {
      res.send(userGame);
    }
  );
});

module.exports = router;
