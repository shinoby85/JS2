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



});