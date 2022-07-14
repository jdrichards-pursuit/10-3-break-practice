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
  return characters.map(item=>item.name);
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
  let total=0;
  let count=0;
  for (let x of characters)
  {
    total+=Number(x['height']);
    count++;
  }

  return typeof total==="number"?total/count:"error";
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
  let eyeColorObj = {};
  for(let x of characters)
  {
    if(eyeColorObj[x['eye_color']]===undefined)
    {
      eyeColorObj[x['eye_color']]=1;
    }
    else
    {
      eyeColorObj[x['eye_color']]++;
    }
  }
  return Object.keys(eyeColorObj).length===0?'Nothing to check.':eyeColorObj;
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

function getAllCharactersCreatedAfterYear(characters,date) {
  let resultArr=[];
  for(let x of characters)
  {
    if(Number(date)>=Number(x['created'].split("-")[0]))
    {
      resultArr.push(x['name']);
    }
  }
  return resultArr;
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

function getCharactersInMovie(characters,title) {
  let resultObj = {};
  
  for(let x of characters)
  {
    for(let y of x['films'])
    {
      if(y.toLowerCase()===title.toLowerCase())
      {
        resultObj[x['id']]=x['name'];
        break;
      }
    }
  }
  return resultObj;
}

//UNCOMMENT THE LINE BELOW TO TEST YOUR SOLUTION
// console.log(getCharactersInMovie(characters, 'return of the jedi'));
