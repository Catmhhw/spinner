const args = process.argv.slice(2);

let spin = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ']
let time = 100

const loop = (loopAmount) => {
    for (let i = 0; i < loopAmount; i++) {
        for (const part of spin) {
            setTimeout(() => {
                process.stdout.write(part);
            }, time);
            time += 200;
        }
    }
}

loop(args);
