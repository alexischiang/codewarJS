//myversion:

function expandedForm(num) {
    var str = num.toString();
    var num1 = num;
    var sum="";
    var digit="";
    var multi = 10;
    for (var i =0;i<str.length;i++){
        if(num1%multi !== 0){
            digit =  num1%multi;
            num1 -= num1%multi;
            sum = "+" + digit + sum;     
        }else{
            multi *= 10;
        }
    }
    //num1已剩最大一个整数
    return num1 + sum;
  }


//answer1
function expandedForm(num) {
  var arr = num.toString(10).split("");
  var zeros = arr.length-1;
  var newZero = zeros;
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != '0') {
      while (newZero > 0) {
        arr[i] = arr[i] + "0"
        newZero--
      }
      newArr.push(arr[i]);
    }
    newZero = zeros -= 1;
  }
  return newArr.join(" + ");
}
