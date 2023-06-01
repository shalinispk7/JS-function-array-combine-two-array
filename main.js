// Combine two array

let array1 = [21,25,27,3];
let array2 = [30,45,67];

function combinedTwoArray(array1,array2){
    let newArray =[];


for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i]);
  }
  
  for (let j = 0; j < array2.length; j++) {
    newArray.push(array2[j]);
  }
  
  return newArray;
}
document.write("The elements in the first are are: "+array1+"<br>");
document.write("The elements in the second are are: "+array2+"<br>");
document.write("Combined two arrays "+combinedTwoArray(array1,array2));