let Tessel = require('tessel-io');
let five = require('johnny-five');

let board = new five.Board({
  io: new Tessel()
});

// Simple blink on a5
board.on('ready', () => {
  let led = new five.Led('a5');
  // led.blink(500);
  led.pulse(2000);
});
