module.exports = class Logr {
  constructor() {
    this.styles = {
      // STYLE ANSI CODE
      reset: '\x1b[0m',
      bold: '\x1b[1m',
      italic: '\x1b[3m',
      underline: '\x1b[4m',
      // FOREGROUND ANSI CODE
      black: '\x1b[30m',
      red: '\x1b[31m',
      green: '\x1b[32m',
      yellow: '\x1b[33m',
      blue: '\x1b[34m',
      cyan: '\x1b[36m',
      white: '\x1b[38m',
      grey: '\x1b[90m',
      // BACKGROUND ANSI CODE
      bgReset: '\x1b[49m',
      bgBlack: '\x1b[40m',
      bgRed: '\x1b[41m',
      bgGreen: '\x1b[42m',
      bgYellow: '\x1b[43m',
      bgBlue: '\x1b[44m',
      bgCyan: '\x1b[46m',
      bgWhite: '\x1b[47m',
      bgGrey: '\x1b[100m',
    };
    this.currentStyles = [];
  }

  // STYLE
  bold() {
    this.currentStyles.push(this.styles.bold);
    return this;
  }

  italic() {
    this.currentStyles.push(this.styles.italic);
    return this;
  }

  underline() {
    this.currentStyles.push(this.styles.underline);
    return this;
  }

  color(color) {
    if (this.styles[color]) {
      this.currentStyles.push(this.styles[color]);
    }
    return this;
  }

  bgColor(bgColor) {
    if (this.styles[bgColor]) {
      this.currentStyles.push(this.styles[bgColor]);
    }
    return this;
  }

  // FOREGROUND
  primary() {
    return this.color('blue')
  }

  secondary() {
    return this.color('grey');
  }

  error() {
    return this.color('red');
  }

  info() {
    return this.color('cyan');
  }

  light() {
    return this.color('white');
  }

  dark() {
    return this.color('black');
  }

  success() {
    return this.color('green');
  }

  warning() {
    return this.color('yellow');
  }

  // BACKGROUND
  bgPrimary() {
    return this.bgColor('bgBlue')
  }

  bgSecondary() {
    return this.bgColor('bgGrey');
  }

  bgError() {
    return this.bgColor('bgRed');
  }

  bgInfo() {
    return this.bgColor('bgCyan');
  }

  bgLight() {
    return this.bgColor('bgWhite');
  }

  bgDark() {
    return this.bgColor('bgBlack');
  }

  bgSuccess() {
    return this.bgColor('bgGreen');
  }

  bgWarning() {
    return this.bgColor('bgYellow');
  }

  toString() {
    const combinedStyles = this.currentStyles.join('');
    this.currentStyles = [];
    return `${combinedStyles}%s${this.styles.reset}`;
  }

  log(message) {
    console.log(this.toString(), message);
  }
  
}

