function desglosarString(string, type) {
    if (type !== "vocales" && type !== "consonantes") {
        throw new Error("El tipo debe ser vocales o consonantes.");
    }

    const vowels = ["a", "e", "i", "o", "u"];
    const chars = string.split('');

    if (type === "vocales") {
        return chars.filter((char) => vowels.includes(char)).length;
    } else {
        return chars.filter((char) => !vowels.includes(char)).length;
    }
}

function twoSum(list, num) {
    for (let i = 0; i < list.length; i++) {
        const current = list[i];
        const complement = num - current;

        const j = list.findIndex((n, index) => n === complement && index !== i);

        if (j !== -1) {
            return [i, j];
        }
    }

    return [];
}

function conversionRomana(string) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let i = 0;

    while (i < string.length) {
        const current = romanValues[string[i]];
        const next = romanValues[string[i + 1]];

        if (next > current) {
            // If there is a case like IV, subtract I from V
            total += (next - current);
            i += 2; // Skip
        } else {
            total += current;
            i++;
        }
    }

    return total;
}

// Testeo
console.log(desglosarString("murcielagos", "vocales"));
console.log(desglosarString("murcielagos", "consonantes"));
console.log(twoSum([2, 7, 11, 15], 13));
console.log(twoSum([3, 4, 2], 6));
console.log(twoSum([3, 3, 2], 6));
console.log(conversionRomana("III"));
console.log(conversionRomana("XIV"));
console.log(conversionRomana("MMXXIV"));
console.log(conversionRomana("MMXXV"));
console.log(conversionRomana("MXMVII"));