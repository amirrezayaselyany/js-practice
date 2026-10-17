"use strict";
let height = prompt("قدت چقدره؟");
let weight = prompt("وزنت چقدره؟");
function isValid(value){
    if(value < 0 || value == null || value == undefined || isNaN(value)==true || value.trim()==""){
       return false;
    }
    return true;
}
if (!isValid(weight) || !isValid(height)){
    alert("ورودی نامعتبر!");
}else{
    function BMI(){
        let x1= (height/100)**2;
        let x2 = weight / x1;
        if(x2<18.5){
            alert("شما دارای کمبود وزن هستید!")
        }else if(18.5<= x2 && x2<= 24.9){
            alert("وزن شما نسبت به قد شما نرمال است!")
        }else if(25<= x2 && x2<=29.9){
            alert("شما دارای اضافه وزن هستید!");
        }else{
            alert("شما یک فرد چاق هستید!")
        }
    }
    BMI();
}