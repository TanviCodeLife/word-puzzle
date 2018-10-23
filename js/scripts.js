

// check for vowels in array and replace with dashes
function checkVowelsAndReplace(inputArrayVowels){
  var vowels = ["a", "e", "i", "o","u"];
  var outputArrayDashes = [];
  for(var i = 0; i <= vowels.length-1; i++){
    for(var j = 0; j <= inputArrayVowels.length-1; j++){
      if (inputArrayVowels[j] === vowels[i] || outputArrayDashes[j] === "-"){
        outputArrayDashes[j] = "-"
      }
      else{
        outputArrayDashes[j] = inputArrayVowels[j];
      }
    }
  }
  $("#ouputStrings").text(outputArrayDashes.join(""));
}


$(document).ready(function(){
  $("form#form1").submit(function(event){
    event.preventDefault();
    //user-input
    var inputStringVowels = $("#inputStr").val();
    var inputArray = inputStringVowels.split("");
    checkVowelsAndReplace(inputArray);
  });
});
