var through = require('through'),
    split = require('split'),
    counter = 1;
    tr = through(function (line) {
        if (counter % 2 === 0){
            output = line.toString().toUpperCase();
        } else {
            output = line.toString().toLowerCase();
        }
        counter++;
        this.queue(output+'\n');
    });

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);