var faker = require("faker");

var randomName = faker.name.findName();
var randomEmail = faker.internet.email();

export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: randomName, email: randomEmail });
};
