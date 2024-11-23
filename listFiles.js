const fs = require('fs');

function getDirectoryContents(path) {
    try {
        return fs.readdirSync(path);
    } catch (error) {
        throw new Error(`Failed to read directory: ${error.message}`);
    }
}

module.exports = getDirectoryContents;
