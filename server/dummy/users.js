const { faker } = require("@faker-js/faker");

const makeUser = function () {
  const users = [];
  const numberOfUsers = 10;
  for (let i = 1; i <= numberOfUsers; i++) {
    let user = {
      userName: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      userGames: [],
    };
    users.push(user);
  }
  return users;
};

module.exports.users = makeUser();
