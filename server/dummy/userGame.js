const { faker } = require("@faker-js/faker");

const makeUserGame = function () {
    let userGame = {
      score: 0,
      isWon: false,
      game: [],
    };
  return userGame;
};

module.exports.makeUserGame = makeUserGame;
