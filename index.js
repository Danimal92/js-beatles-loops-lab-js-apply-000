function theBeatlesPlay(musicians, instruments){
  let resultArray = []
  for(let i = 0; i < musicians.length; i++){
    resultArray.push(musicians[i] + ' plays ' + instruments[i])
  }
  return resultArray
  }
  
  
function johnLennonFacts(facts){
  let result = []
  let i = 0
  while(i < facts.length){
    result.push(facts[i] + '!!!')
    i++    
  }
  return result 
}
    
  
function iLoveTheBeatles(num){
  let result = []
  let i = 0
  do {
    return 'I love the Beatles!'
    i++
  }
  while(i <= num);
}
    it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function() {
      expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
    });

    it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function() {
      expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
    });
  });

});
