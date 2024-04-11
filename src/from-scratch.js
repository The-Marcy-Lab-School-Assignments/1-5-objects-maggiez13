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
  // return team.matches[0][0];
  team.matches.teamName(0);
};

const listAllKeys = () => {
};

const listAllValues = () => {
};

const convertToMatrix = () => {
};

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
