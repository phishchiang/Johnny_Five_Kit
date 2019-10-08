let Tessel = require('tessel-io');
let five = require('johnny-five');

let board = new five.Board({
  io: new Tessel()
});

board.on('ready', function() {
  let leds = new five.Leds(['b5', 'b6']);
  let buttons = new five.Buttons(['a5', 'a6']);

  buttons.on('press', button => {
    leds.off();
    leds[buttons.indexOf(button)].on();
  });
});
