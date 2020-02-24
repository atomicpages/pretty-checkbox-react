const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor');

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = on => {
    on('file:preprocessor', cypressTypeScriptPreprocessor);
};
