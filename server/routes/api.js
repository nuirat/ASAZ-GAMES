const express = require('express')
const router = express.Router()
const dummyUsers = require('../dummy/users')
const dummyGames = require('../dummy/game')
const dummyUserGames = require('../dummy/userGame')
const Game = require('../models/Game')
const User = require('../models/User')
const UserGame = require('../models/UserGame')


router.get('/users/:userId', function(req, res){ // to get a user for login
    let userId = req.params.userId
    User.findById(userId, function(err, user) {
        res.send(user)
    })
})

router.post('/users', function(req, res){ // when create an account (register)
    const users = dummyUsers.users
    users.forEach(u => {
        let newUser = new User(u)
        newUser.save()
    })
    res.end();
})

router.post('/games', function(req, res){ // add game
    const gamesNumbers = 3
    for(let i = 0; i < gamesNumbers; i++){
        const game = dummyGames.makeGame()
        let newGame = new Game(game)
        newGame.save()
    }
    res.end()
})


router.get('/games', function(req, res){ // to show all games
   Game.find({}, function(err, games){
      res.send(games)
   })
})

router.get('/games/:gameId', function(req, res){ //to show game info
   let gameId = req.params.gameId
   Game.findById(gameId, function(err, game){
    res.send(game)
   })
})

router.post('/userGames', function(req, res){ // add user game when user start a game
    let userId = req.query.userId
    let gameId = req.query.gameId
    Game.findById(gameId, function(err, game){
        let userGame = new UserGame({
            score: 0,
            isWon: false,
            game: game
        })
        userGame.save()
        User.findByIdAndUpdate(userId,
            { 
                "$push": { userGames: userGame } 
            },{"new": true} , function(err, user){
            let userGames = user.userGames
            res.send(userGames)
        })
    })
    
})

router.get('/userGames:/userId', function(req, res){ // to get all games for a user
    let userId = req.params.userId
    User.findById(userId).populate({
        path: 'userGames',
        model: 'UserGame',
    }).exec(function(err, user){
        console.log(user.userGames);
        res.send(user.userGames)
    })
})

router.get('/userGames/:userGameId', function(req, res){// to get score and isWon for a game for a user
    let userGameId = req.params.userGameId
    UserGame.findById(userGameId).populate('game').exec(function(err, userGame){
         res.send(userGame)
    })
})

router.put('/userGames/:gameId', function(req, res){ // update score or isWon from state ==> score and isWon from a query
})


module.exports = router;