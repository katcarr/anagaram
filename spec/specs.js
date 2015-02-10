describe("anagram", function() {
  it("accepts a 2 element array where the second element is already an anagram of the first element, and will return the second element", function() {
    expect(anagram("sub", ["bus"])).to.eql(["bus"]);
  });

  it("will check a two element list for possible anagrams and return the anagrams in a array", function(){
    expect(anagram("sub",["bus", "stop"])).to.eql(["bus"]);
  });

  it("will return two anagrams", function() {
    expect(anagram("sub", ["bus", "stop", "ubs"])).to.eql(["bus", "ubs"]);
  });
});
