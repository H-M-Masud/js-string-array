const myFavDate = new Date('2022-02-15');
// console.log(myFavDate)
const anotherDate = new Date(1971,3,26,11,50,40,80);
// console.log(anotherDate)


if(myFavDate.getTime() < anotherDate.getTime()){
    console.log('favorite is earlier')
}
const getCurrentDay = new Date().getDay();
const getCurrentHour = new Date().getHours();
const getCurrentMinutes = new Date().getMinutes();
const getCurrentSeconds = new Date().getSeconds();
// console.log('today is', getCurrentDay)
// console.log('Time ',getCurrentHour, getCurrentMinutes, getCurrentSeconds)

// const task = "Practice Makes a person perfect";
// const index = task.toLowerCase().indexOf("M");

// const str1 = 'Bangladesh is a beautiful country.'; 
// console.log(str1.endsWith("country"));

// const str= 'I love coding more than eating.';
// const str1 = str.slice(2,6)
// console.log(str1)

const names =["rafiq", "jabbar","bakkar", "habib", "dalim"];
const reverseNames = names.reverse();
// console.log(reverseNames)


const array = ["121", "12", "1", "112", "111"];

console.log(array.sort());