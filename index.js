// add solution here
function theBeatlesPlay (musicians , instruments) {
  var allMusicians = [];
  for(let i = 0; i < musicians.length; i++) {
        allMusicians.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return allMusicians;
}

function johnLennonFacts () {
  var facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];
  var i = 0;
  var newFacts = [];
  while (i < facts.length ) {
    newFacts.push(`${facts[i]}!`);
  }
  return newFacts;
}
