describe("anagram", function() {
  it("accepts a 2 element array where the second element is already an anagram of the first element, and will return the second element", function() {
    expect(anagram("sub", ["bus"])).to.eql(["bus"]);
  });
});
