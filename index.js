const { Person } = require("./person.js");

//require("./modules/path.js");
//require("./modules/fs.js");
//require("./modules/http.js");

require("./modules/express.js");

const person = new Person("Fulano de Tal");

console.log(person.sayMyName());