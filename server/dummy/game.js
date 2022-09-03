const { faker } = require("@faker-js/faker");

const makeGame = function () {
    let game = {
      name: faker.word.noun(),
      thumbnail: faker.image.image(),
      description: faker.random.words(10),
      time: faker.date.recent(),
    };
  return game;
};

module.exports.makeGame = makeGame;
