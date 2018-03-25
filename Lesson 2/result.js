function suc(data) {
    console.log('Результат операции: '+data);
}
function err(data) {
    console.log("В результате операции ошибка: "+data);
}

document.getElementById('btn-1').addEventListener('click',function () {
   var xhr1=new XMLHttpRequest();
   xhr1.open('GET','./data/suc.json',true);
   xhr1.onreadystatechange=function () {
       if (xhr1.readyState!==4){
           return;
       }
       if (xhr1.status!==200){
           return;
       }
       var data=JSON.parse(xhr1.responseText);
       suc(data.result);

   };
   xhr1.send();
});
document.getElementById('btn-2').addEventListener('click',function () {
    var xhr2=new XMLHttpRequest();
    xhr2.open('GET','./data/err.json',true);
    xhr2.onreadystatechange=function () {
        if (xhr2.readyState!==4){
            return;
        }
        if (xhr2.status!==200){
            return;
        }
        var data=JSON.parse(xhr2.responseText);
        err(data.result);

    };
    xhr2.send();
});