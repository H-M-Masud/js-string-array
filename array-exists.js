function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return 'Please provide an array'
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const friends = ['kitub', 'lition', 'shamol', 'sabbir'];
const myBigBuddy = megaFriend();
// console.log(myBigBuddy)

if(friends.indexOf('lition') !=-1){
    // console.log('lition exists')
}

// includes
if(friends.includes('lition')){
    console.log('lition exists using includes')
}

// concat
const first = [1, 3, 5];
const second = [4, 5, 6, 7];
const combined = first.concat(second);
console.log(combined)