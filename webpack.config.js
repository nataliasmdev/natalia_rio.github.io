const path = require('path');

module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'assets/js/'),
    },
};
