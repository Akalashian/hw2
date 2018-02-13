// To execute this code, be sure you're in the right directory;
// (Mac)       cd ~/code/hw2
// (Windows)   cd c:\code\hw2
// Then type:
// node hw2.js

// HOMEWORK 2

// Cryptocurrency is all the rage. You have decided to create your own,
// KelloggCoin, that will massively disrupt financial markets at the Global
// Hub.

let blockchain = [
  { fromUser: null, toUser: "brian", amount: 21000 },
  { fromUser: "brian", toUser: "ben", amount: 9000 },
  { fromUser: "brian", toUser: "jeff", amount: 7000 },
  { fromUser: "ben", toUser: "jeff", amount: 400 },
  { fromUser: "brian", toUser: "jeff", amount: 1500 },
  { fromUser: "jeff", toUser: "brian", amount: 4500 },
  { fromUser: "jeff", toUser: "ben", amount: 1750 },
  { fromUser: "jeff", toUser: "ben", amount: 1750 },
  { fromUser: "jeff", toUser: "ben", amount: 1750 },
  { fromUser: "jeff", toUser: "ben", amount: 1750 },
  { fromUser: "jeff", toUser: "ben", amount: 1750 },
  { fromUser: "jeff", toUser: "ben", amount: 1750 },
]

// let brianAmount = 0
// let benAmount = 0
// users = []

let calculateBalance = function(name) {
  let amount = 0
  for (var i = 0; i < blockchain.length; i++) {
    //
    // if toUser is in users
    if blockchain[i].toUser===name {
      amount = amount + blockchain[i].amount
    }
    if blockchain[i].fromUser===name {
      amount = amount - blockchain[i].amount
    }
  }
  return amount
}
calculateBalance('brian')
calculateBalance('ben')
calculateBalance('jeff')


// for (var i = 0; i < blockchain.length; i++) {
//   //
//   if blockchain[i].toUser==="ben" {
//     benAmount = benAmount + blockchain[i].amount
//   }
//   if blockchain[i].fromUser==="ben" {
//     benAmount = benAmount - blockchain[i].amount
//   }
// }
//
//
//
// if blockchain[1].toUser==="brian" {
//   brianAmount = brianAmount + blockchain[1].amount
// }
// if blockchain[2].toUser==="brian" {
//   brianAmount = brianAmount + blockchain[2].amount
// }
// if blockchain[3].toUser==="brian" {
//   brianAmount = brianAmount + blockchain[3].amount
// }
// if blockchain[4].toUser==="brian" {
//   brianAmount = brianAmount + blockchain[4].amount
// }
// console.log(brianAmount)
// Write a function that, when given a username (i.e. brian, ben, or jeff),
// returns the number of KelloggCoin that user has in their KelloggCoin "wallet".

// HINT! You will have to use all the JavaScript programming fundamentals we've
// learned about so far, i.e. variables, arrays, objects, conditionals, loops,
// and functions, to complete this task. There are ways to do this using some
// more advanced array functions, and by all means, experiment with this, but
// get it done using just the basics first.

// It should print out:
// Brian's KelloggCoin balance is 8000
// Ben's KelloggCoin balance is 10350
// Jeff's KelloggCoin balance is 2650


console.log("Brian's KelloggCoin balance is " + calculateBalance("brian"));
console.log("Ben's KelloggCoin balance is " + calculateBalance("ben"));
console.log("Jeff's KelloggCoin balance is " + calculateBalance("jeff"));
