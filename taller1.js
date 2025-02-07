function convertidorTemp(temp) {
    return temp * 9 / 5 + 32;
}

function resolvedor(a, b, c, positive) {
    let x = positive ? (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a) : (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    return x;
}

function mejorParidad(number) {
    return number % 2 === 0;
}

function bogo(arr) {
    let shuffleCount = 0;
    function shuffle(arr) {
        let shuffled = [];
        let rand;
        while (arr.length !== 0) {
            rand = Math.floor(Math.random() * arr.length);
            shuffled.push(arr.splice(rand, 1)[0]);
        }
        return shuffled;
    }

    function sorted(shuffle) {
        for (let i = 0; i < shuffle.length - 1; i++) {
            if (shuffle[i] <= shuffle[i + 1]) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    }

    do {
        shuffleCount++;
        arr = shuffle(arr);
    } while (!sorted(arr));

    return shuffleCount + ' | ' + arr.join();
}

function peorParidad(number) {
    let even = number % 2 === 0;

    // Bogo sort because yes
    bogo([2, 1, 4, 3, 5, 6, 4, 2, 7, 8, 1]);

    return even;
}

console.log(peorParidad(20));