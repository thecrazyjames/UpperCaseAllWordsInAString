function getIndexToIns(arr, num) {

//Sort the array using .sort(callbackFunction) to sort it by lowest to highest, from left to right. 

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

  arr.sort(function(a,b){
    return a-b;
  })

//for loop iterates through the array to find the first value which num is less than

  for (var i=0; i<arr.length; i++){
    if (num <= arr[i]){
      //console.log(i);
      return i;
      
    }
    
  }

//if array is empty or num is greater than every number in the array, return the length of the array

//console.log(arr.length)
return arr.length;

}

//test cases

getIndexToIns([40, 60], 50);
getIndexToIns([400, 30, 12, 18, 99, 60], 50);
getIndexToIns([40, 1, 606, 88, 10.33, 60], 50);
