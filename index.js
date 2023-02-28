
const newArray = [];

function writeCards(cardRecipientArray,eventName){
    for (let n = 0; n < cardRecipientArray.length; n++){
        const letterOfThanks = `Thank you, ${cardRecipientArray[n]}, for the wonderful ${eventName} gift!`;
        newArray.push(letterOfThanks);
    }
    return newArray;
}

function countDown(positiveInteger){
    let i = 0;
    while(positiveInteger >= i){
        console.log(positiveInteger);
        positiveInteger--;
    }
}
countDown(4);