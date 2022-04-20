const input="Hi, Human";
const vowels=["a","e","i","o","u"];
let resultArray=[];
for (i in input){
  // console.log(i);
  for(j in vowels){
    // console.log(j);
    if (input[i]===vowels[j]){
      // console.log(input[i])
      if (input[i]==="e"){
      resultArray.push("ee")
      
     
      }else if (input[i]==="u"){
      resultArray.push("uu")
      }else{
        resultArray.push(input[i])
      }      
    }

    
  }
}

console.log(resultArray.join('').toUpperCase())
