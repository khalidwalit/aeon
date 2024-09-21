const readline = require('readline');

// Create an interface for input and output streams
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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

// Function to get input from the console
const getInput = () => {
    rl.question('Enter the sorted numbers (comma-separated): ', (numbersInput: string) => {
        rl.question('Enter the target number: ', (targetInput: string) => {
            const numbers = numbersInput.split(',').map(Number); // Convert input string to an array of numbers
            const target = Number(targetInput); // Convert target input to a number
            
            const result = twoSum(numbers, target);
            console.log(`Result: [${result.join(', ')}]`); // Print the result

            rl.close(); // Close the readline interface
        });
    });
};

// Start the input process
getInput();
