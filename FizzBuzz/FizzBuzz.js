let n=prompt(" ی عدد بگو رفیق!");

function isValid(value){
    if(value<0 || value==null || value== undefined || isNaN(value)==true || value.trim()==""){
        return false;
    }
    return true;
}
if(!isValid(n)){
    alert("ورودی نامعتبر!");
}else{
    for(let x =1; x<=n ;x++){
        if(x%3==0){
            alert("Fizz");
        }else{
            alert(x);
        }
    }  
}
