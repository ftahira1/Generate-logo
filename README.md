# Generate logo!

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

- In this project, we had to understand and utilize polymorphism by creating parent and child class constructors in order to perform Test-Driven Development (TDD), as well as practice more with using Inquirer and writing to a file.

## Installation
1. This is a [Node.js](https://nodejs.org/en) application. For this app to run correctly, it is instructed to use at least v16 (up to v18) 
2. [Inquirer v8.2.4](https://www.npmjs.com/package/inquirer) is the version of Inquirer that is needed and can be installed via npm. Make sure you are in your project folder and type: `npm i inquirer@8.2.4` in the Terminal.
3. [Inquirer-maxlength-input-prompt](https://www.npmjs.com/package/inquirer-maxlength-input-prompt) is used to restrict the user text input to 3 characters. In your terminal, type: `npm i inquirer-maxlength-input-prompt`.
4. [Jest](https://www.npmjs.com/package/jest) is needed to run unit tests.. Type the following in your terminal: `npm i jest`.


## Usage

- Generating a logo
  1. Type `npm i` in the Terminal to run our dependencies packages.
  2. Type `node index.js` in the Terminal and go through the prompts to generate your logo which will be located in the `/svg` folder.
  3. In case prompted for colors, samples, please either enter a color name or a 6-digit hex value. For example, `red` or `#FF0000` are for the same color.

## Testing

- Unit Tests using Jest

  - To run all 4 unit tests that are provided, type `npm run test` in the terminal  You can find the code in the `./test` folder.

## Demo

- A walkthrough video can be found here: https://drive.google.com/file/d/1EP7KvQt48kBF243WsZd5Cg83dJdJplNe/view?usp=sharing

## License

- Refer to the license in the repository.