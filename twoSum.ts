const twoSum = (numbers: number[], target: number): number[] => {
    let left: number = 0;
    let right: number = numbers.length - 1;

    while (left < right) {
        const sum: number = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
};

console.log(twoSum([4,11,17,25], 21));
console.log(twoSum([0,1,2,2,3,5], 4));
console.log(twoSum([-1,0], -1));
