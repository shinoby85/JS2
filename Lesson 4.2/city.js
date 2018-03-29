$(function () {
    var ajaxData;
   $.ajax({
       type:'GET',
       url:'./city.json',
       success: function (data) {
           ajaxData=data;
           for (var i=0; i<ajaxData.length;i++){
               $('#city').append('<option value="'+ajaxData[i][0]+'">'+ajaxData[i][1]+'</option>');
           }

       },
       dataType:'json',
       error:function (error) {
           console.log(error);
       }
   });
   $('#cityQuery').keyup(function () {
       var calLetter=$(this).val().length;
       if (calLetter>=3){
           var flagAddCity=false;
           var searchStr='<ul>';
           var strCity=$(this).val();
           for (var i=0; i<ajaxData.length;i++){
               if(ajaxData[i][1].toLowerCase().indexOf(strCity)!=-1){
                   searchStr+='<li>'+ajaxData[i][1]+'</li>';
                   flagAddCity=true;
               }
           }
           searchStr+='</ul>';
           if (flagAddCity===true){
               $('#cityAComplete').show();
               $('#cityAComplete').html(searchStr);
           }
           $('#cityAComplete ul li').on('click',function (event) {
               $('#cityAComplete').hide();
               $('#cityQuery')[0].value=event.target.innerText;
           })

       }
       else {
           $('#cityAComplete').hide();
           $('#cityAComplete').html('');
       }
   });




});