//Question 1
function myReverse(str) {
  // your code here
  let revStr='';
  for(let i=str.length-1;i>=0;i--){
    revStr+=str[i];
  }
  return revStr;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  // your code here
  let temp='';
  for(let i=0;i<str.length;i++){
    temp=temp+str[i];
    for(let j=0;j<combinations.length;j++){
      if(temp===combinations[j]){
        combinations.push(temp);
      }
    }
  }
  temp='';
  for(let i=str.length-1;i>=0;i--){
    temp=temp+str[i];
    for(let j=0;j<combinations.length;j++){
      if(temp===combinations[j]){
        combinations.push(temp);
      }
    }
  }
  //
  return combinations;
}

//Question 3
function allCaps(str) {
  let allCap = str.split(' ');
  for (let i = 0; i < splitStr.length; i++) {

      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  return splitStr.join(' ');
}

//Question 4
function myPower(x, n) {
  // your code here
  return "";
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  return "";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words);

const chars = str.split('');
console.log(chars);
// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
