const createLogger = require('./index');

const table = createLogger("table", "red");

table([{id: 1, name: "Hello"}, {id: 2, name: "world"}]);