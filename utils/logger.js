const fs = require('fs');

const logInfo = fs.createWriteStream('../stdout.log');
const logError = fs.createWriteStream('../stderr.log');

const logger = {
    info: (message) => {
        logInfo.write(`${new Date().toISOString()} [INFO] ${message}\n`);
    },
    error: (message) => {
        logError.write(`${new Date().toISOString()} [ERROR] ${message}\n`);
    }
};
module.exports = logger;
