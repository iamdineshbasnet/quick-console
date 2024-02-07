
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

logr.info().log('Information: Remember to update.');

  

// ... and more

  

```




## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.


## License
Simple-logr is licensed under the ISC License.

  
  

NOTE: Feel free to customize this template and include any additional details or usage instructions that you think would be helpful for users.