const Logr = require('./../src/index');

const logr = new Logr();


logr
  .success()
  .bgWarning()
  .log('This is a success message with a warning background.');

logr
  .primary()
  .bgSecondary()
  .log('Foreground color: Primary, Background color: Secondary');

logr
  .error()
  .bgDark()
  .log('An error message with a dark background.');

logr
  .info()
  .bgInfo()
  .log('An informational message with an informational background.');

logr
  .underline()
  .bgSuccess()
  .log('An underlined message with a success background.');

logr
  .bold()
  .color('red')
  .bgPrimary()
  .log('A bold, red text with a primary background.');
