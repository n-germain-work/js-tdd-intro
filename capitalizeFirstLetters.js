const assert = require('assert');

const capitalizeFirstLetters = (s) => {
  let words = [];
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ' || i === s.length - 1) {
      words.push(s[start].toUpperCase() + s.substring(start + 1, i + 1));
      start = i + 1;
    }
  }
  return words.join('');
};

//Tests
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

assert.strictEqual(capitalizeFirstLetters.length, 1);

assert.strictEqual(
  capitalizeFirstLetters('i am learning TDD'),
  'I Am Learning TDD'
);

assert.strictEqual(capitalizeFirstLetters('wild'), 'Wild');

assert.strictEqual(capitalizeFirstLetters('z'), 'Z');

assert.strictEqual(capitalizeFirstLetters(''), '');

//Proofs ^^
console.log(capitalizeFirstLetters('i am learning TDD'));

console.log(capitalizeFirstLetters('wild'));

console.log(capitalizeFirstLetters('z'));

console.log(capitalizeFirstLetters(''));
