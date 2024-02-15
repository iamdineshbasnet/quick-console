module.exports = class Logr {
  constructor() {
    this.styles = {
      // ANSI styles for text formatting
      reset: '\x1b[0m',
      bold: '\x1b[1m',
      italic: '\x1b[3m',
      underline: '\x1b[4m',
      strikethrough: '\x1b[9m',

      // ANSI colors for text
      black: '\x1b[30m',
      red: '\x1b[31m',
      green: '\x1b[32m',
      yellow: '\x1b[33m',
      blue: '\x1b[34m',
      cyan: '\x1b[36m',
      white: '\x1b[38m',
      grey: '\x1b[90m',
      
      // ANSI colors for background
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

  // Methods to apply different text styles
  applyStyle(style) {
    this.currentStyles.push(this.styles[style]);
    return this;
  }

  bold() {
    return this.applyStyle('bold');
  }

  italic() {
    return this.applyStyle('italic');
  }

  underline() {
    return this.applyStyle('underline');
  }

  strikethrough() {
    return this.applyStyle('strikethrough');
  }

  // Methods to apply different text colors
  applyColor(color) {
    return this.applyStyle(color);
  }

  color(color) {
    return this.applyColor(color);
  }

  bgColor(bgColor) {
    return this.applyColor(bgColor);
  }

  // Methods to apply predefined color schemes
  primary() {
    return this.color('blue')
  }

  secondary() {
    return this.color('grey');
  }

  error() {
    return this.color('red');
  }

  danger() {
    return this.color('red');
  }

  destructive() {
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

  // Methods to apply predefined background color schemes
  bgPrimary() {
    return this.bgColor('bgBlue')
  }

  bgSecondary() {
    return this.bgColor('bgGrey');
  }

  bgError() {
    return this.bgColor('bgRed');
  }

  bgDanger() {
    return this.bgColor('bgRed');
  }
  
  bgDestructive() {
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

  // Method to reset styles and generate formatted string
  toString() {
    const combinedStyles = this.currentStyles.join('');
    this.currentStyles = [];
    return `${combinedStyles}%s${this.styles.reset}`;
  }

  // Method to log messages with applied styles
  log(message) {
    console.log(this.toString(), message);
  }
}

