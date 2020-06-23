// Exercise 2-7
// ------------

// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  const str = arr[0];
  const num = arr[1];

  if (typeof str !== "string" || typeof num !== "number") return undefined;

  if (num <= 0) return "";

  let sum = "";
  for (i = 0; i < num; i++) {
    sum += str;
  }
  return sum;
}
// We need 7 test cases.
// Don't forget to test all of the question parameters
expect(repeat(["foo", 2]), "foofoo");
expect(repeat(["bacon", 1]), "bacon");
expect(repeat(["buzz", 0]), "");
expect(repeat(["fuzz", -2]), "");
expect(repeat(["fuzzbuzz", "fuzzbuzz"]), undefined);
expect(repeat([2, 2]), undefined);
expect(repeat(["foo", "foo"]), undefined);
/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
