function executeSecond() {
  console.log('I execute second');
}
function executeThird() {
  console.log('I execute third');
}
function executeForever() {
  while(true) {}
}

console.log('I execute first');

// schedule code to execute after 0 seconds aka as soon as possible
setTimeout(executeSecond, 0);
setTimeout(executeForever, 0);
setTimeout(executeThird, 0);
