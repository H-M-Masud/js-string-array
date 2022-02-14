function addNumber(){
    let result = 0;
    for(const num of arguments){
        result = result + num;
    }
    return result;
}
const sum = addNumber(23, 13, 34, 100, 420);
// console.log(sum)

function getFullName(){
    let fullName = '';
    for(const part of arguments){
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('omuk', 'songket','bin','hanif', 'songket', 'bin', 'tomuk', 'songket', 'bin', 'kumuk', 'songket');
console.log(name)