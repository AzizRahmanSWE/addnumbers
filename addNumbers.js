
// We are tasked to create a program that takes
// in any number of command line arguments
// which will be numbers, and adds them toghether
// in and returns a sum of all the numbers.
// node addNumbers 1 2 3 4 5
// 15


//how to take command line arguments.(terminal)

//how to add multiple numbers together.

//return/console.logged(totalNumber)
console.log(process.argv) // argv after 2nd element is what I write to my command. compiling my file!

//how do I go throught the list of numbers?(looping)
//how to add numbers?

let sum = 0
for (let i = 2; i < process.argv.length; i++) {
  console.log('i =', i);
  console.log(process.argv[i]);
  //gotta convert the string recieved from terminal to a number.
  sum = sum + Number(process.argv[i]);
}

console.log("the value is ", sum);