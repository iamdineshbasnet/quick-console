function createLogger(name, color = 'white') {
  return console[name].bind(console);
}


module.exports = createLogger;
