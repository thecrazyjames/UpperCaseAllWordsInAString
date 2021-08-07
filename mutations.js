/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/

function mutation(arr) {

//counter variable for keeping track of whether or not each letter of the second string in the array is in the first string in the array at least once  
  
var counter = 0;

//looping through the second string and first string and determining if each letter occurs in the first string at least once.
//As soon as there is a match, the counter adds one and the loop is broken (I did not want the counter to continue counting if the letter occured more than once)
  
for (var i=0; i<arr[1].length; i++){
    for (var j=0; j<arr[0].length; j++){
    //console.log(arr[1][i]);
    if (arr[1][i].toLowerCase()==arr[0][j].toLowerCase()){
      counter++;
      break
    }
  }
}

//conditional statement comparing if the counter variable is equal to the number of letters in the second string. If true that means all the letters
//show up in the first string. If not, the result is false.
  
if (counter == arr[1].length){
  return true;
}
else{
  return false;
}
}
mutation(["hello", "hey"])
