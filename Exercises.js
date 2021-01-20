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
  for(let i=0;i<str.length;i++){
    for(let j=i+1;j<=str.length;j++){
      combinations.push(str.slice(i,j));
    }
  }
  return combinations;
}

//Question 3
function allCaps(str) {
  let allCap = str.split(' ');
  for (let i = 0; i < allCap.length; i++) {

      allCap[i] = allCap[i].charAt(0).toUpperCase() + allCap[i].substring(1);     
  }
  return allCap.join(' ');
}

//Question 4
function myPower(x, n) {
  // your code here
  let sum=x;
  for(let i=1;i<=n;i++){
    sum*=n;
  }
  return sum;
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  let char='';
  for(let i=0;i<str.length;i++){
    char=str[i]
    for(let j=i+1 ;j<str.length;j++){
      if(char===str[j]){
        char='wrong';
        break;
      }
    }
    if(char===str[i]){
      break;
    }
  }
  return char;
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  let sum=0;
  for(let i=1;i<num;i++){
    if(num%i===0)
    {
      sum+=i;
    }
  }
  return sum===num;
}

// *** Playground ***
// Feel free to run and test your code here on your own
let str='dog';
let combinations = [];
let count=0;
// your code here
let temp=str.charAt(0);
console.log(temp);
combinations.push(temp);
console.log(combinations);
for(let i=1;i<str.length;i++){
  temp+=str.charAt(i);
  for(let j=0;j<combinations.length;j++){
    if(temp !==combinations[j]){
      count++;
    }
  }
  if(count===combinations.length)
  combinations.push(temp);
  console.log(temp)
}
console.log(temp);
let revStr='';
for(let i=str.length-1;i>=0;i--){
  revStr+=str.charAt(i);
  for(let j=0;j<combinations.length;j++){
    if(revStr===combinations[j]){
      continue
    }
  }
  combinations.push(revStr);
}
console.log(revStr);
console.log(combinations);
// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
