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

console.log(1 === '1'); //false

//dont ever use == always use ===
console.log(1 == '1'); //true

console.log ( 1 !== '2'); //true

// this tells you how many characters( letters, numbers, etc)
'cats'.length
console.log('cats'.length);

// this is good for looking for text to replace
const quote = 'winter is coming';
console.log(quote.indexOf('is')) //index of is a function - this will find the word is and then find the index value of the y ( return 7)
console.log(quote.indexOf('bunny')) // if it does not find it, it returns a -1 ( means did not find)

// Objects

//think of objects as a "bucket of cats" cats would move - objects are made of key value pairs
// doesn't matter the order of the key value pairs

const catName = () => {
    return 'killer'
}

const bucketOCats = {
    cat1: 'fluffy',
    cat2: 5,
    cat3: catName,
    cat4: {
        water: 'nope',
        sunlight: 'yep'
    }
};

// dot notation
console.log(bucketOCats.cat2);

// bracket notation
// function['keyname']
console.log(bucketOCats['cat2']);

// how to get to the cat4 object key notatition water
console.log(bucketOCats.cat4.water)

// dot notation is preferred

let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 1400000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
}

console.log('meaning_of_life: ', hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);//42

let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010",
    vacation_days: 20,
    employee_of_the_month: false

}

printToDom('printing', `Our companys lawyer is  , ${employee.name}`);
printToDom('printing', `Jeff was hired on', ${employee.hire_date}`);
printToDom('printing',employee.vacation_days);
printToDom('printing',employee['vacation_days']);
printToDom('printing',employee.employee_of_the_month);

console.log(`Our companys lawyer is  , ${employee.name}`);
console.log( `Jeff was hired on , ${employee.hire_date }`);
console.log(employee.vacation_days);
console.log(employee['vacation_days']);
console.log(employee["employee_of_the_month"]);

// since this is in quotes it needs to be in bracket notation
let eom = "employee_of_the_month";
employee[eom] = false;

console.log(employee);

// employee of the month is the key
