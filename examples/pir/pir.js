var Gpio = require('onoff').Gpio,
    sensor = new Gpio(17, 'in', 'both'),
    led = new Gpio(4, 'out');

sensor.watch(function(err, value) {
    if (err)
        exit(err);

    console.log('Someone entered your kingdom!');
    led.writeSync(value);
});

function exit(err) {
    if (err)
        console.log('An error occurred: ' + err);
    sensor.unexport();
    led.writeSync(0);
    led.unexport();
    console.log('Bye, bye!');
    process.exit();
}

process.on('SIGINT', exit)