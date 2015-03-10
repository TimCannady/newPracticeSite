var divString = function(num1,num2){
  
  var divided = Math.round(num1/num2)
  var numArr = divided.toString().split('');
  var startPos = numArr.toString().length % 3;
  
  for(var i = startPos; i < numArr.length; i+=4){
    numArr.splice(i, 0, ',');
  }
  return numArr.join('');
}

divString(123456789,10000)