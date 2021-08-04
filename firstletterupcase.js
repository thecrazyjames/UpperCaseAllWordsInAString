//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

//For the purpose of this exercise, you should also capitalize connecting words like 'the' and 'of'.

function titleCase(str) {
  var strArray =[];
  for(var i =0; i<str.length; i++){
  
  if (i==0){
   strArray.push(str[i].toUpperCase());
  }
  else if (str[i - 1] === ' ')
  {
    strArray.push(str[i].toUpperCase());
  }
  else{
    strArray.push(str[i].toLowerCase());
  }

  }
  console.log(strArray);
  str = strArray.join('');
  console.log(str);
  return str;
}

titleCase("I'm a little tea pot");
