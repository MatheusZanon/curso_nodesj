const { Person } = require("./person.js");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect.js");

dotenv.config();

connectToDatabase();

//require("./modules/path.js");
//require("./modules/fs.js");
//require("./modules/http.js");

require("./modules/express.js");

//const person = new Person("Fulano de Tal");

//console.log(person.sayMyName());