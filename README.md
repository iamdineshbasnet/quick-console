
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

- primary <img src="https://i.imgur.com/veAyZOv.png" height="10" width="50" />

- secondary <img src="https://i.imgur.com/G3YreLD.png" height="10" width="50" />

- error or danger or destructive <img src="https://i.imgur.com/UzKoiPs.png" height="10" width="50" />

- info <img src="https://i.imgur.com/r67FkfB.png" height="10" width="50" />

- success <img src="https://i.imgur.com/1e9JmeA.png" height="10" width="50" />

- light <img src="https://i.imgur.com/VpxN8Ze.png" height="10" width="50" />

- dark <img src="https://i.imgur.com/EMX4o2U.png" height="10" width="50" />

- warning <img src="https://i.imgur.com/k1ys5jI.png" height="10" width="50" />

## Supported Styles
- bold

- underline

- italic

- strikethrough

  

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