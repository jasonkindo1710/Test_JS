//cau 4
  
function findAllHobbyists(hobby, hobbies) {
    var arr = [];
  for (let val in hobbies) {
      if(hobbies[val].includes(hobby)){
        arr.push(val);
      }
  }
  return arr;
  }
  
  var hobbies = {
    "Steve": ['Fashion', 'Piano', 'Reading'],
    "Patty": ['Drama', 'Magic', 'Pets'],
    "Chad": ['Puzzles', 'Pets', 'Yoga']
  };
  
  console.log(findAllHobbyists('Yoga', hobbies));