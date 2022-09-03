const dummyGames = require('./server/dummy/games')
const Game  = require('./server/models/Game')


const generateGame = function(){
    const games = dummyGames.games()
    games.forEach(g => {
        let game = new Game(g)
        game.save()
  })
}

generateGame()

