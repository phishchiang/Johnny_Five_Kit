let Barcli = require('barcli');
let five = require('johnny-five');
let Tessel = require('tessel-io');
let board = new five.Board({
  io: new Tessel(),
  repl: false,
  debug: false
});

board.on('ready', function() {
  let range = [0, 100];
  let graph = new Barcli({
    label: 'My Data',
    range: range
  });
  let sensor = new five.Sensor({
    pin: 'a7',
    threshold: 5 // See notes below for detailed explanation
  });

  sensor.on('change', () => {
    graph.update(sensor.scaleTo(range));
  });
});
