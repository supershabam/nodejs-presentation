'use strict';

exports.calculate = function(iterations) {
  var pi = 4
    , top = 4
    , bot = 3
    , minus = true
    , i = 0
    , startTime
    , endTime
    , duration
    ;

  for (i = 0; i < iterations; ++i) {
    pi += (minus == true) ? -(top/bot):(top/bot);
    minus = !minus;
    bot +=2;
  }

  return pi;
};
