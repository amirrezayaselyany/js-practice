let age = prompt("چند سالته؟");
if(age < 0 || age==null || age== undefined || isNaN(age)==true || age.trim()===""){
   alert("ورودی نامعتبر!")
}else if(age=="0"){
alert("کصکش صفر سالته و داری توی وب میچرخی کونی؟");
}else{
   if(age<13){
      alert("تو هنوز کودکی!");
   }else if(13 <= age && age <= 17){
      alert("توی ی نوجونی!");
   }else{
      alert("تو دیگه ی بزرگسالی!");
   }
}