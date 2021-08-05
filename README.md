# UpperCaseAllWordsInAString

This is a script for turning the first letter of every word into a string into a capital letter and all other characters to lower case.

The function takes a string as the agrument and uses methods such as .toUpperCase() .toLowerCase() and .join()

the function follows these steps:

1. create an empty array

2a. loop through the string
2b. if it is the first character in the string, convert to UpperCase, push to array
2c. else if it is a character after a space, convert to UpperCase, push to array
2d. else, convert to LowerCase, push to array

3. join() array

4. return string
 
