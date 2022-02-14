const products = [
    'Dell hardCore i29 200GB Laptop',
    'iphone iTB camera flashlight Phone',
    'yellow laptop with black camera',
    'Dell 1X59 Lenovo commercial yoga laptop',
    'LG supernova laptop Dell',
    'HTC low price phone',
    'Dell purple color phone with laptop'
];

const searching = 'dell';
// indexOf
const outPut = [];
for(const product of products){
    if(product.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) !=-1){
        // outPut.push(product);
    }
}
// console.log(outPut)

for(const product of products){
    if(product.toLocaleLowerCase().includes(searching.toLocaleLowerCase())){
        // outPut.push(product)
    }
}
// console.log(outPut)

// starts with
for(const product of products){
    if(product.toLocaleLowerCase().startsWith(searching.toLocaleLowerCase())){
        // outPut.push(product)
    }
}
// console.log(outPut)

// ends with
for(const product of products){
    if(product.toLocaleLowerCase().endsWith(searching.toLocaleLowerCase())){
        outPut.push(product)
    }
}
// console.log(outPut)