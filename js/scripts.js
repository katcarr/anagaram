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


$(document).ready(function() {
  $("form#anagram-form").submit(function(event){
    var word = $("input#word").val();
    var listString = $("input#list").val();
    var list = listString.split(",");

    var result = anagram(word, list).join(", ");

    $(".anagrams").text(result);

    if(result){
      $("#result").show();
    }else{
      $("#no-result").show();
    }

    event.preventDefault();

  });

});
