// code your solution here
function saturdayFun (activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun());
console.log(saturdayFun("a soccer match"));


const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };  
console.log(mondayWork());
console.log(mondayWork("work from home"));

function wrapAdjective(result = "*") {
    return function(emphatic) {
      return `You are ${result}${emphatic}${result}!`;
    }
  }
  
  const wrapInAsterisks = wrapAdjective();
  console.log(wrapInAsterisks("hard worker"));
