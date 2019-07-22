function theBeatlesPlay(musicians, instruments){
  let resultArray = []
  for(let i = 0; i < musicians.length; i++){
    resultArray.push(musicians[i] + ' plays ' + instruments[i])
  }
  return resultArray
  }
  
  
function johnLennonFacts(facts){
  
  
}
    it("returns an array of strings with exclamation points", function() {
      expect(johnLennonFacts([
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
      ])).toEqual(["He was the last Beatle to learn to drive!!!", "He was never a vegetarian!!!", "He was a choir boy and boy scout!!!", "He hated the sound of his own voice!!!"]);

      expect(johnLennonFacts([
        "foo",
        "bar",
      ])).toEqual(["foo!!!", "bar!!!"])
    });
  });
  
