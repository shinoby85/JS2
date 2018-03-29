function myForm() {
    var btn1=document.getElementById('btn-text1');
    var text1=document.getElementById('text1');
    btn1.addEventListener('click', function () {
        var str=text1.innerText;
        //var reg=/(\b\'+)|(+\'\b)/g;
        document.getElementById('output1').innerHTML='<span class="text">Вывод результата по первой задаче:</span><br>'+str.replace(/\'/g,'"');
    });

    var btn2=document.getElementById('btn-text2');
    var text2=document.getElementById('text2');
    btn2.addEventListener('click',function () {
        var str=text2.innerText;
        var str1;
        str=str.replace(/\b\s\'/g,' "');
        str=str.replace(/\'\B/g,'"');
        document.getElementById('output2').innerHTML='<span class="text">Вывод результата по второй задаче:</span><br>' + str;
    });


    var btn3=document.getElementById('btn3');
    btn3.addEventListener('click',function () {
        var fText=document.getElementById('field-text');
        var fphone=document.getElementById('field-phone');
        var fmail=document.getElementById('field-mail');
        var fcomments=document.getElementById('field-comments');
        var ftextExp=/^[A-Z|А-Я]{1}[a-z|а-яё]{1,8}(\s|$)/;
        visualEffect(fText,ftextExp);

        var fPhoneExp=/^\+7\(\d{3}\)\d{3}\-\d{3}$/;
        visualEffect(fphone,fPhoneExp);

        var fMailExp=/^\w{1,}((\.|\_|\-)\w{1,})*@\w{1,}\.\w{2,4}$/;
        visualEffect(fmail,fMailExp);
        visualEffect(fcomments,/./);
    });

    //Кнопка очистки формы
    var btn4=document.getElementById('btn4');
    btn4.addEventListener('click',function () {
        resetField(document.getElementById('field-text'));
        resetField(document.getElementById('field-phone'));
        resetField(document.getElementById('field-mail'));
        resetField(document.getElementById('field-comments'));
    })

};


//Проверка поля на соответствие регулярному выражению
function checkField(fieldForm,regExp) {
    return regExp.test(fieldForm.value);
}
//Создание визуальных эффектов для полей ввода
function visualEffect(fieldForm,regExp) {
    if(checkField(fieldForm,regExp)){
        fieldForm.style.boxShadow='0 0 5px 2px lawngreen';
    }
    else fieldForm.style.boxShadow='0 0 5px 2px orange';
}
//Обнуление полей формы
function resetField(fieldForm) {
    fieldForm.value='';
    fieldForm.style.boxShadow='';
}


