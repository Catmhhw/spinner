process.stdout.write('hello from spinner1.js... \rheyyy\n');

let spin = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ','\r|  ', '\r/  ', '\r-  ', '\r\\  ']
let time = 100

for (const part of spin) {
    setTimeout(() => {
            process.stdout.write(part);
        }, time);
        time += 200;
}
