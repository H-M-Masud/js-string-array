const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
console.log(words);

// slice
const smallSlice = anthem.slice(5, 13);
console.log(smallSlice);


// substr
const anotherPart = anthem.substr(5, 8);
console.log(anotherPart);

// substring
const anotherAnotherPart = anthem.substring(5, 13);
console.log(anotherAnotherPart)

// concat
const first = 'amader';
const second = 'city';
// const fullString = first + second;
const fullString = first.concat(second).concat('abc')


// join
const words2 = ['alim', 'adhon', 'ameron', 'david'];
// const allJoined = words2.join('');
// const allJoined = words2.join(' ');
// const allJoined = words2.join(',');
const allJoined = words2.join(', ');
console.log(allJoined)

