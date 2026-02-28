//implementation of a stack:
// const stack = () => {
//     this.count = 0;
//     this.storage = {}

//     //adding a value onto the end of the stack:
//     this.push = (value) => {
//         this.storage[this.count] = value;
//         this.count ++;
//     }

//     //removing a value from the top of the stack:
//     this.pop = () => {
//         if(this.count === 0){
//             return undefined;
//         }
//         this.count--;
//         var result = this.storage[this.count];
//         delete this.storage[this.count];
//         return result;
//     }

//     //return the size of the stack:
//     this.size = () => {
//         return this.count;
//     }

//     //return the element at the end of the stack:
//     this.peek = () => {
//         this.storage[this.count-1]
//     }
// }


//EXAMPLE
//functions: push, pop, peek, length

let letters = [];
let word = "racecar";
let reverseWord = "";

//put the letters into the stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

//remove the letters one by one from the stack
for (let j = 0; j < word.length; j++) {
  reverseWord += letters.pop();
}

if (reverseWord === word) {
  console.log(word + " is a palindrome");
} else {
  console.log(word + " is NOT a palindrome");
}
