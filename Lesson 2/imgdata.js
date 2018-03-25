function MyImg(smallImg,bigImg) {
    this.smallImg=smallImg;
    this.bigImg=bigImg;
};

MyImg.prototype.outputImg=function () {
    var ls3=document.getElementById('ls3');
    var img=document.createElement('img');
    img.src=this.smallImg;
    var imgID=this.smallImg.split('-');
    imgID=imgID[1].split('.');
    img.id=imgID[0];
    ls3.appendChild(img);
    var bigLink=this.bigImg;
    document.getElementById(imgID[0]).addEventListener('click',function () {
        openImageWindow(bigLink);
    });

};
function openImageWindow(src) {
    var image = new Image();
    image.src = src;
    var width = image.width;
    var height = image.height;
    window.open(src,"Image","width=" + width + ",height=" + height);
};


var myFunc=function () {
    var xhr=new XMLHttpRequest();
    xhr.open('GET','./data/imgdata.json',true);
    xhr.onreadystatechange=function () {
        if(xhr.readyState!==4){
            return;
        }
        if (xhr.status!==200){
            return;
        }
        var data=JSON.parse(xhr.responseText);
        for (var i=0;i<data.length;i++){
            var img= new MyImg(data[i].srcsmall,data[i].srcbig);
            img.outputImg();
        }

    };
    xhr.send();

};


