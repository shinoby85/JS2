function styleSubMenu() {
    var nav=document.getElementById('menu');
    nav.style.background='white';
    var nav_ul=nav.getElementsByTagName('ul');
    for (var i=0;i<nav_ul.length;i++) {
        nav_ul[i].style.listStyle = '';
        nav_ul[i].style.margin = '0';
        nav_ul[i].style.padding = '0';
    }
    var nav_a=nav.getElementsByTagName('a');
    for(i=0;i<nav_a.length;i++) {
        nav_a[i].style.textDecoration = 'none';
        nav_a[i].style.outline = '';
        nav_a[i].style.display = 'block';
        nav_a[i].style.transition = '.4s ease-in-out';
    }
    var nav_menu=document.getElementById('my-menuID');
    nav_menu.style.textAlign='center';
    nav_menu.style.padding='10px 0';
    var nav_li_child=nav.querySelectorAll('.my-menu > li');
    for(i=0;i<nav_li_child.length;i++){
        nav_li_child[i].style.display='inline-block';
        nav_li_child[i].style.position='relative';
    }
    var nav_menu_li_a=nav.querySelectorAll('.my-menu > li > a');
    for(i=0;i<nav_menu_li_a.length;i++){
        nav_menu_li_a[i].style.padding='12px 26px';
        nav_menu_li_a[i].style.color='#767676';
        nav_menu_li_a[i].style.textTransform='uppercase';
        nav_menu_li_a[i].style.fontWeight='bold';
        nav_menu_li_a[i].style.letterSpacing='1px';
        nav_menu_li_a[i].style.fontFamily='"Exo 2", sans-serif';
    }
    var nav_li_a=nav.getElementsByTagName('a');
    for(i=0;i<nav_li_a.length;i++){
        nav_li_a[i].onmouseover=function (e) {
            nav_li_a[i].style.color='#767676';
        };
        

        /*nav_li_a[i].onmouseover = function(){
            nav_li_a[i].style.color='green';
        }*/
        /*nav_li_a[i].onmouseout = function(){
            nav_li_a[i].style.color = '';
        }*/

    }

}