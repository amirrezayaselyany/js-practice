//تمرینی که مشاهده میکنید ی مینی پروژه کوچیک برای تمرین جاوااسکریپت هست . 
// در این تمرین از شما خواسته شده که از کاربر یک عدد بگیرید و اون عدد رو تبدیل به روز های هفته کنید . سعی کنید برای مقادیر نامعتبر هم فکری بکنید.
// صفحه ما در اینستاگرام: @amir.yasel


let day = prompt("ی عدد بین ۱ تا ۷ انتخاب کن جیگر!");
function isValid(value){
    if(value < 0 || value== null || value == undefined || isNaN(value)== true || value.trim()=="" ){
        return false;
    }
    return true;
}
if(!isValid(day)){
    alert("ورودی نامعتبر!");
}else{
    switch(+day){
        case 1 :
            alert("امروز شنبس!");
            break;
        case 2 :
            alert("امروز یکشنبس!");
            break;
        case 3 :
            alert("امروز دوشنبس!");
            break;
        case 4 :
            alert("امروز سه شنبس!");
            break;
        case 5 :
            alert("امروز چهارشنبس!");
            break;
        case 6 :
            alert("امروز پنج شنبس!");
            break;
        case 7 :
            alert("امروز جمعس!");
            break;
        default :
            alert("عددت باید بین یک تا هفت باشه!");    
    }
}
