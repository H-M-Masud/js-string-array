const numbers = [4, 7, 1, 3, 9, 2, 5,6, 8];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);
const friends = ['kabli', 'josim', 'razzak', 'anwar', 'deepjol', 'badsha'];
const sortedFriends = friends.sort();
// console.log(sortedFriends);
// const reverseFriends = friends.reverse();
// console.log(reverseFriends)

const sortedReverseFriends = friends.sort().reverse();
// console.log(sortedReverseFriends);

// number sorting fun
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBigNumbers = bigNumbers.sort(function(a, b){
    return a - b;
});
console.log(sortedBigNumbers)
