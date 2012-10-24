// argv helper library
var program = require('commander')
  , moment = require('moment')
  , pi = require('./lib/pi')
  ;

program
  .version('0.0.1')
  .usage('node cli.js [options]')
  .option('-i, --iterations <n>', 'Number of iterations (default 3)', parseInt)
  .parse(process.argv)
  ;

// set default
program.iterations = program.iterations || 3;

var result
  , startTime
  , endTime
  , duration
  ;

// write to the screen
console.log('lets make some pi using with iterations = ' + program.iterations);

// capture start time
startTime = moment();

// do long operation
result = pi.calculate(program.iterations);

// capture end time
endTime = moment();
duration = moment.duration(endTime.valueOf() - startTime.valueOf());
console.log('I think that pi = ' + result);
console.log('I calculated that in ' + duration.asMilliseconds() + 'ms');
