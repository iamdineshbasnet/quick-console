
## SimpleLogr

  

A lightweight and easy-to-use logging utility for Node.js.

  

## Installation

  

```bash

npm install simple-logr

```

  

## Usage

  

```bash

const Logr = require('simple-logr');

const logr = new Logr();

logr.success().bgWarning().log('This is a success message with a warning background.');

```

  

## Features

  

- Simple API for styling console output

- Supports text color and background styling

## Supported Colors

- primary

- secondary

- error

- info

- success

- light

- dark

- warning

  

## Examples

  

```bash

const Logr = require('simple-logr');

const logr = new Logr();  


// Log a success message with a bold style and a green color

logr.success().bold().log('Operation successful!');

  

// Log an error message with a red color and an underline

logr.error().underline().log('An error occurred.');

  

// Log an informational message with a cyan color and a background color

logr.info().bgBlue().log('Information: Remember to update.');

  

// ... and more

  

```