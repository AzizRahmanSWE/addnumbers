
// We are tasked to create a program that takes
// in any number of command line arguments
// which will be numbers, and adds them toghether
// in and returns a sum of all the numbers.
// node addNumbers 1 2 3 4 5
// 15


//how to take command line arguments.(terminal)

//how to add multiple numbers together.

//return/console.logged(totalNumber)
// argv after 2nd element is what I write to my command. compiling my file!

//how do I go throught the list of numbers?(looping)
//how to add numbers?

let sum = 0;
const array = process.argv.splice(2);


for (let i = 0; i < array.length; i++) { ///TODO: find a cleaner way to i = 2;
  //gotta convert the string recieved from terminal to a number.
  sum = sum + Number(array[i]);
}
//Make a function to keep everthing clean.

console.log("the value is ", sum);