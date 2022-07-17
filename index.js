const characters = require('./data/swapi');
// DO NOT CHANGE THE LINE ABOVE

/**
 * listAllCharacters()
 * -------------------
 * Returns all character names from an array of characters. If the inputted array is empty, returns 0.
 * 
 * @param {Object[]} characters - an array of movie characters
 * @returns {string[]} an array of strings, which are character names
 *
 * EXAMPLE:
 * 
 * listAllCharacters([])
 * 
 * //> 0
 * 
 * 
 * 
 * listAllCharacters(characters);
 *
 * //> [
  'Luke Skywalker',
  'C-3PO',
  'R2-D2',
  'Darth Vader',
  'Leia Organa',
  'Owen Lars',
  'Beru Whitesun Lars',
  'R5-D4',
  'Biggs Darklighter',
  'Obi-Wan Kenobi'
   ];
 *
 */

function listAllCharacters(characters) {
  let array = [];

   if(!characters.length) {
      return 0;
    }

  for (let i = 0; i < characters.length; i++) {
    if(characters.length) {
      array.push(characters[i].name)
    }
   
  }
  return array;
}

//UNCOMMENT THE LINES BELOW TO TEST YOUR SOLUTION
// console.log(listAllCharacters([]));
// console.log(listAllCharacters(characters));

/**
 * averageHeightOfAllCharacters()
 * ------------------------------
 * Returns the average height of all of the listed characters
 *
 * @param {Object[]} characters - an array of movie characters
 * @returns {number} - a number representing the average height
 *
 * No example for this one. You should be able to find the average at this point
 */

function averageHeightOfAllCharacters(characters) {
   let sumOfHeight = 0;
let arr = [];

   for(let i = 0; i < characters.length; i++) {
    if(characters[i].height) {
      arr.push(Number(characters[i].height))
    }
   }

console.log(arr)
for(let number of arr) {
  sumOfHeight += number;
}
return averageHeight = sumOfHeight / arr.length;

}

//UNCOMMENT THE LINE BELOW TO TEST YOUR SOLUTION
// console.log(averageHeightOfAllCharacters(characters))

/**
 * countByEyeColor()
 * -----------------
 * Returns an object where the keys are the eye colors and the values are number of characters with that eye color.
 * If the inputted array is empty, return 'Nothing to check.'
 *
 * @param {Object[]} characters - an array of movie characters
 * @returns {Object} - keys are the eye colors and values are the number of characters with that eye color
 *
 * EXAMPLE:
 * countByEyeColor([])
 *
 * //> 'Nothing to check.'
 *
 * countByEyeColor(characters)
 *
 * { blue: 3, yellow: 2, red: 2, brown: 2, blue-gray: 1 };
 *
 */

function countByEyeColor(characters) {
  let arr = []; // declare a variable of empty arr (use 4 later)
  let obj = {}; // declare a variable of empty obj (use 4 later)

  if (!characters.length) { // conditional if statement, if nothing exist in the characters array 
    return `Nothing to check`; // return error message
  }

  for(let i = 0; i < characters.length; i++) { // loop to iterate thru characters arr
    if (characters[i].eye_color) { // if characters arr at given index includes eye color
      arr.push(characters[i].eye_color) // thn push the colors in characters eyecolor into empty arr
    }
  }
  // console.log(arr)
  for(let color of arr) { // loop thru the previous arr created on line 119 to find each eye color
    if (!obj[color]) { // if no color in the empty obj
     obj[color] = 1 // add a key value to each color key ... since obj is empty we want to add each color to the empty obj and thn add a value to each color .... =1 because we see only one color
    } else {
      obj[color] += 1 // if key value, add 1 more to value ... if we have multi of same color we want to add the number of times we see it to the value
    }

  }
return obj // after all colors are found and the number of times found with in the arr has been placed as the value to the key colors, return the final obj
}

//UNCOMMENT THE LINES BELOW TO TEST YOUR SOLUTION
// console.log(countByEyeColor([]))
// console.log(countByEyeColor(characters));

/**
 * getAllCharactersCreatedAfterYear()
 * ----------------------------------
 * Returns an array of all characters created on or after a certain year
 * 
 * @param {Object[]} characters - an array of movie characters
 * @param {Number} date - date to be considered for when character object was created
 * @returns {String[]} - returns an array of character names
 * 
 * EXAMPLE:
 * getAllCharactersCreatedAfterYear(characters, 2014)
 *
 * [
  'R2-D2',
  'Owen Lars',
  'Beru Whitesun Lars',
  'R5-D4',
  'Obi-Wan Kenobi'
 * ]
 * 
 * 
 *
 */

function getAllCharactersCreatedAfterYear(characters, date) {
  let characterCreated = [] // create empty arr variable
// console.log(date)
  for(let creates of characters) { // iterate (loop) through chararcters arr
    if (Number(creates.created.split("-")[0]) >= date) { // turns the created string into a number after splitting at index 0, than checks to see if said number is greater or equal to the date value given.
characterCreated.push(creates.name) // pushes the names of all the characters that came up as a truthy to the conditional statement into the empty arr created on line 163
    }
  }
  return characterCreated; // returns the new arr with all characters found on line 167
}

//UNCOMMENT THE LINE BELOW TO TEST YOUR SOLUTION
// console.log(getAllCharactersCreatedAfterYear(characters, 2014));

/** getCharactersInMovie()
 *  ----------------------
 *  Returns an object of characters who were in a certain film. 
 *  Their id will be the key and their name should be the value. 
 *  Title should be CASE INCENSITIVE meaning, 
 *  if the string argument is e.g. 'star wars' or 'STAR WARS' or 'STaR wArs' 
 *  and there is a film called 'Star Wars' in the character's data, 
 *  the character was in the film and should be returned.
 * 
 *  @param {Object[]} characters - an array of movie characters
 *  @param {String} - string with the title of the movie
 *  @returns {Object} - key should be the id and the value should be their name
 *
 * EXAMPLE:
 *
 * getCharacterIds(characters, 'return of the jedi')
 * 
 * //> {
   L3kdddkek: 'Luke Skywalker',
   Idkk99dkc: 'C-3PO',
   Kekk39dis: 'R2-D2',
   O894iriie: 'Darth Vader',
   Viie78949: 'Leia Organa',
   Ghfjkd998: 'Obi-Wan Kenobi'
   }
 */

function getCharactersInMovie(characters,filmStr) {
  let nameAndId = {} // created variable for the empty object
  let str = []; // created a variable for empty arr
  for (let i = 0; i < characters.length; i++){ // loop through characters length pt.1 of nested loop
    for (let k = 0; k < characters[i].films.length; k++){ //loop through the characters film length pt.2 nested loop
      if((characters[i].films[k]).toLowerCase() === filmStr.toLowerCase()) { // this will check characters at given index and film given index and convert findings to lowercase thn compare the lowercased films to the string filmStr given 
        str.push(characters[i].id) // push the characters id that was found to equal the string given (filmStr) into empty arr
      }
    }
    for(let namesId of str){  // iterate thru the previous arr created on line 209 pt.3 nested loop
      if (!nameAndId[namesId]){ // if the empty obj has no value
        nameAndId[namesId] = characters[i].name // created a key and assigned it a value of characters name
      }
    }
  }
  return nameAndId;
}

//UNCOMMENT THE LINE BELOW TO TEST YOUR SOLUTION
// console.log(getCharactersInMovie(characters, 'return of the jedi'));
