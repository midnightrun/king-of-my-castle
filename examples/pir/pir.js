var Gpio = require('onoff').Gpio,
    sensor = new Gpio(17, 'in', 'both'),
    led = new Gpio(4, 'out');

sensor.watch(function(err, value) {
    if (err)
        exit(err);

    if (value  === true) {
        console.log('Someone entered your kingdom!')
        led.write(1, function() {
            console.log('LED state: ' + 1);
        });
    } 
    else {
        console.log('No one here.')
        led.write(0, function() {
            console.log('LED state: ' + 0);
        });
    }

});

function exit(err) {
    if (err)
        console.log('An error occurred: ' + err);
    sensor.unexport();
    console.log('Bye, bye!');
    process.exit();
}

process.on('SIGINT', exit)