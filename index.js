/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age}years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!]`);
    }
    return gifts;
}
wrapGifts(gifts);
*/



function writeCards(nameOfRecipient, ocassion) {
    const returnedArray = [];

    for (let c = 0; c <nameOfRecipient.length; c++) {
        const card = (`Thank you, ${nameOfRecipient[c]}, for the wonderful surprise gift!`);
        returnedArray.push(card);
    }
    return returnedArray;
}

function countDown(integer){
    for (let i = integer; i >= 0; i--) {
        console.log(i);
    }
    return integer;
}