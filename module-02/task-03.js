'use strict'

const calculateEngravingPrice = (message, pricePerWord) => {
    return message.split(" ").length * pricePerWord;
};

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient', 10));
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient', 20));
console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40));
console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20));