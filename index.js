function unique_characters(string){
var charArray = Array.from(string) //convert charArray
  for(var x= 0; x<charArray.length; x++){
    for (let y= x + 1; y < charArray.length; y++)
      if(charArray[x]===charArray[y]){
      return false;
    }
  }
return true
}


var string ="apple"
console.log(unique_characters(string))