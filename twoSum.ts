const twoSum = (numbers: number[], target: number): number[] => {
    let left: number = 0; // Initialize left pointer
    let right: number = numbers.length - 1; // Initialize right pointer

    while (left < right) {
        const sum: number = numbers[left] + numbers[right]; // Calculate the sum

        if (sum === target) {
            // Return the 1-based indices
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++; // Move left pointer to the right
        } else {
            right--; // Move right pointer to the left
        }
    }

    return []; // This should not be reached as per problem constraints
};

console.log(twoSum([4,11,17,25], 21));
console.log(twoSum([0,1,2,2,3,5], 4));
console.log(twoSum([-1,0], -1));
