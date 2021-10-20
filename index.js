/*for(let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}*/

/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for(let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);*/

function writeCards(names, event) {
    const newCards= [];
    for(let i = 0; i < names.length; i++) {
        newCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newCards;
}

/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    let i = 0;
    while(i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }
    return gifts;
}

wrapGifts(gifts);*/

function countDown() {
    let i = 0;
    while(i < 11) {
        console.log(i++);
    }
}