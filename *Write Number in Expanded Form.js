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
