// Given the following functions, answer the questions below.

const square = (x) => {
  return x * x;
};

const decrement = (x) => {
  return x - 1;
};

const duplicateString = (x) => {
  return x.concat(x);
};

const reverseString = (str) => {
  const splitString = str.split(""); // var splitString = "hello".split("");
  const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
};

// Expand each of the following and get the result of the expression
// 1-1
square(decrement(square(decrement(3))));
//first it will decrement 3 to 2. Than square it to 4. Than gain decrement 4 to 3 and at lat will square it to 9.Ans is 9.
// 1-2
decrement(decrement(square(square(3))));
// First it will be squared twice and than will be decremented twice to 79.
// 1-3
duplicateString(reverseString("hello"));
//fist it will reverse string to olleh and than duplicate it to olleholleh.
// 1-4
reverseString(duplicateString(duplicateString("foo")));
//First ti will duplicate it to foofoo. Than again it will duplicate to foofoofoofoo. And at last reverse it to oofoofoofoof.
