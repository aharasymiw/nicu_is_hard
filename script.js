// console.log("javascript is working");


// write one line of code at a time

// test things before you move in
// if they are broken, fix them before you move on
// before you move on to writing new code.
// before you move on to fixing another bug.

// find a value in a nested array

// Given a list of people,
//find which people are wearing a certain item of clothing
// objects representing people inside an array

let people = [
    {
        name: 'Jon',
        relationship: 'Friend',
        wearing: ['watch', 'cool hat', 'ascot', 'gloves']
    },
    {
        name: 'Sarah',
        relationship: 'Unknown',
        wearing: ['gloves', 'cardigan', 'scarf', 'shoes']
    },
    {
        name: 'Naseem',
        relationship: 'Uncle',
        wearing: ['shoes', 'jacket', 'hat', 'watch']
    },
]

// set up a function ✅
function checkClothing(itemToFind, listOfPeople) {

    // itemToFind = "watch"

    // loop over the list of objects ✅
    let matchingNames = [];

    for (let person of listOfPeople) {

        // console.log(person);
        // check for a match, steps:
        // cycle through person.wearing  // for loop ✅
        // check for match aka: ✅
        // add name to matchingNames when there is a match

        for (let itemOfClothing of person.wearing) {
            // console.log("list of itemOfClothing for each person", itemOfClothing);
            // = sets equal
            // == === check if things are equal
            if (itemOfClothing === itemToFind) {  // is the thing we are look for, the same as the the thing the person is wearing, that we're currently looking at

                console.log(`${person.name} is wearing a ${itemToFind}`);
                // if they match, add the person's name to matchingNames
                matchingNames.push(person.name);
            }
        }
    }

    // return the people's names who match

    // return some value here
    // console.log(itemToFind);
    // console.log(listOfPeople);

    return matchingNames;
}

let checkClothingResult = checkClothing("watch", people);
console.log("expect checkClothingResult to be ['Jon', 'Naseem']", checkClothingResult);

let checkClothingResult2 = checkClothing("shoes", people);
console.log("expect checkClothingResult2 to be ['Sarah', 'Naseem']", checkClothingResult2);
