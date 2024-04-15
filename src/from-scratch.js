const coolGreeting = (person) => {
  if(person.isCool === true) {
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`;
  } else {
    return `Greetings ${person.name}, how have you been lately?`;
  }
};

const haveBirthday = (person) => {
  // const {name, age} = person;
  person.age += 1;
};

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name; 
  person.spyHandle = spyHandle; 
};

const carMaker = (name, maker, year) => {
  return {
    name: name,
    year: year,
    maker: maker,
    needsOilChange: false,
  }
};

const weAreNotFriends = (person) => {
  return person.friends.pop();
};

const listHobbies = (person) => {
  for (let i = 0; i < person.hobbies.length; i++) {
    console.log(`${person.name} likes ${person.hobbies[i]}.`);
  }
};

const getNextOpponent = (team) => {
  if (team.matches.length > 0) {
    return team.matches[0].teamName;
  } else {
    return null; 
  }
};
const listAllKeys = (obj) => {
  return Object.keys(obj);
};

const listAllValues = (obj) => {
  return Object.values(obj);
};

const convertToMatrix = (arrOfObjs) => {
  let matrixArray = [];
  if (arrOfObjs.length === 0) {
    return [];
  } 
  matrixArray.push(Object.keys(arrOfObjs[0]));
    // pushes keys of first object into matrixArray
      // will be header row of matrix
  for (let i = 0; i < arrOfObjs.length; i++) {
    const obj = arrOfObjs[i];
      // gets current object in loop iteration
    matrixArray.push(Object.values((obj)));
      // pushes values of current object into matrixArray
  }
  return matrixArray;
};

// const convertToMatrix = (arr) => {
//   if (arr.length === 0) {
//     return [];
//   } 
//   const keys = Object.keys(arr[0]);
//   const result = [keys];
//     for (let i = 0; i < arr.length; i++) {
//       result.push(Object.values(arr[i]));
//     }
//   return result;
// };

// const convertToMatrix = (arr) => {
//   if (arr[0] === undefined || arr[0] === null) return [];
//   const totalArr = [];
//   totalArr.push(Object.keys(arr[0]));
//   for (let e in arr) {
//     totalArr.push(Object.values(arr[e]));
//   }
//   return totalArr; 
// };


module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
