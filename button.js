let Tessel = require('tessel-io');
let five = require('johnny-five');

let board = new five.Board({
  io: new Tessel()
});

board.on('ready', function() {
  let led = new five.Led('a5');
  let button = new five.Button('a2');
  button.on('press', () => led.on());
  button.on('hold', () => led.blink(500));
  button.on('release', () => led.stop().off());
});
