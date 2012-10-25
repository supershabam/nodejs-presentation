var config = require('./config');

module.exports = io.connect(config.socket.url);