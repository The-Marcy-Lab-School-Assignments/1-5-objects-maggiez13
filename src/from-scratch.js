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

  for (let i = 0; i < arrOfObjs.length; i++) {
    const obj = arrOfObjs[i];
    matrixArray.push(Object.values((obj)));
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
