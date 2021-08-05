function frankenSplice(arr1, arr2, n) {
  var newArray = [];
  
  for (var i=0; i<n; i++){
    newArray.push(arr2[i]);
  }
  for (var j=0; j<arr1.length; j++){
    newArray.push(arr1[j]);
  }
  for (var k=n; k<arr2.length; k++){
    newArray.push(arr2[k]);
  }

  console.log(newArray);
  console.log(arr1);
  console.log(arr2);
  console.log(n)
  return newArray;
  
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
