function findMax(nums) {
    if (nums.length === 0) return null;

    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    return max;
}

function findMin(nums) {
    if (nums.length === 0) return null;

    let min = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }

    return min;
}

function includes(nums, num) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === num) {
            return true;
        }
    }

    return false;
}

function sum(nums) {
    let acc = 0;

    for (let i = 0; i < nums.length; i++) {
        acc += nums[i];
    }

    return acc;
}

function missingNumbers(nums) {
    let max = findMax(nums);
    let min = findMin(nums);

    let missing = [];

    if (max === null || min === null) return missing;

    for (let i = min + 1; i < max; i++) {
        if (!includes(nums, i)) {
            missing.push(i);
        }
    }

    return missing;
}

// Testeo
console.log(findMax([3, 17, -1, 4, -19]))
console.log(includes([3, 17, -1, 4, -19], 2))
console.log(includes([3, 17, -1, 4, -19], 4))
console.log(sum([3, 17, -1, 4, -19]))
console.log(missingNumbers([7, 2, 4, 6, 3, 9]))