let Tessel = require('tessel-io');
let five = require('johnny-five');

let board = new five.Board({
  io: new Tessel()
});

// Simple blink on a5
board.on('ready', () => {
  let leds = new five.Leds(['a2', 'a3', 'a4', 'a5', 'a6', 'a7']);
  let index = 0;
  let step = 1;

  board.loop(100, () => {
    leds.off();
    leds[index].on();
    index += step;
    if (index === 0 || index === leds.length - 1) {
      step *= -1;
    }
  });
});
