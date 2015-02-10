var anagram = function(word, list) {

  var results = [];

  var letterizeWord = word.toLowerCase().split("").sort();
  var letterizedList = list[0].toLowerCase().split("").sort();
  var same = false;

  if (letterizeWord.join("") === letterizedList.join("")){
    results.push(list[0]);
  }


  return results;
}
