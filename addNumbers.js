
// We are tasked to create a program that takes
// in any number of command line arguments
// which will be numbers, and adds them toghether
// in and returns a sum of all the numbers.

// node addNumbers 1 2 3 4 5
// 15


const array = process.argv.splice(2);

const addNumbers = function(banana) {
  let sum = 0;
  for (let i = 0; i < banana.length; i++) { 
    sum = sum + Number(banana[i]);
  }
  console.log("the value is ", sum);
}

addNumbers(array);