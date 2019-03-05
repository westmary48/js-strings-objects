console.log('I am in main.js');

// print to dom function used for next few months

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint
}
const iAmThirsty = (num) => {
// do some stuff
// if under 21 'drink some water'
//else if over 21 under 65 'have a beer'
// else over 65 'take a nap'
// conditional statement
if (num < 21) {
    return 'drink some water';
} else if (num >= 21 && num < 65 )  {
    return 'have a beer';
} else if (num > 65) {
    return 'take a nap';
}

};

// console.log(iAmThirsty(55));
// console.log(iAmThirsty(11));
// console.log(iAmThirsty(67));

// call printToDom function, then put in the div id from HTML ('thirsty) and then call the iAmThirsty function with the age in the ().
printToDom('thirsty', iAmThirsty(55));
printToDom('thirsty', iAmThirsty(11));
printToDom('thirsty', iAmThirsty(80));

