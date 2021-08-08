//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

//utilizes the .pop() and .slice() functions

function chunkArrayInGroups(arr, size) {
  var newArray =[];
  
  for (var i=0; i<arr.length; i=i+size){
    newArray.push(arr.slice(i,i+size))
  }

  console.log(newArray);
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)
