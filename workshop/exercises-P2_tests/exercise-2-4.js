// Exercise 2-4
// ------------

// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex("hello", 1); // e
// getLetterAtIndex("", 4);      // undefined
// getLetterAtIndex("abc", 0);   // a

function getLetterAtIndex(str, index) {
  const num = str.charAt(index);
  if (num === "") return undefined;
  return num;
}

// Add 6 more test cases
expect(getLetterAtIndex("hello", 4), "o");
expect(getLetterAtIndex("goodbye", 0), "g");
expect(getLetterAtIndex("kanwargill", 5), "r");
expect(getLetterAtIndex("", 0), undefined);
expect(getLetterAtIndex("concordia", 5), "r");
expect(getLetterAtIndex("k", 0), "k");
expect(getLetterAtIndex("", 6), undefined);
expect(getLetterAtIndex("bacon", 1), "a");
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
