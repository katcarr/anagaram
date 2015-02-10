var anagram = function(word, list) {

  var results = [];
  var sortedWord = word.toLowerCase().split("").sort().join("");

  list.forEach(function(listWord) {
    if ((listWord.toLowerCase().split("").sort().join("")) === sortedWord) {
      results.push(listWord);
    }
  });
  return results;
}
