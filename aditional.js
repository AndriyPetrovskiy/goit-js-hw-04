// Функція вищого порядку

const fruits = [
    {name: 'oranges', price: 100},
    {name: 'bananas', price: 30},
    {name: 'apples', price: 50},
]


const vagetables = [
    {name: 'onion', price: 15}, 
    {name: 'cucunber', price: 20}
]

const toByProducts = function(list, cb) {
    // console.log(list);
    cb(list);
}

// Function 1

const goToMarket = function (array) {
    let totalPrice = 0;
    for(const item of array) {
        totalPrice += item.price;  
    }
    console.log(totalPrice);
}

// Function 2

const toShowProducts = function (arr) {
    for (const i of arr) {
        console.log(i);  
    }
}

goToMarket(fruits);

const bread = 'bread';

toByProducts(vagetables, goToMarket);
toByProducts(fruits, toShowProducts);
toByProducts(bread, (a) => console.log( `I love JS , ${a}`));