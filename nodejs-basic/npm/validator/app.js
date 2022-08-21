const validator = require("validator");
const chalk = require("chalk");

// console.log(validator.isEmail("jamal@mantap.com")); // True

// console.log(validator.isMobilePhone("0817271832", "id-ID")); // True

// console.log(validator.isNumeric("1A")); // False

const lyrics = chalk`{black.bgWhite Have you got colour in your cheeks?} {blue.bgBlack Do you ever get that fear that you can't shift} The type that sticks around like summat in your teeth?`;
console.log(lyrics);
// console.log(chalk.black.bgCyan("Hello World"));
