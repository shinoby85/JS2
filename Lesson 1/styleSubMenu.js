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
    var subMenu=nav.getElementsByClassName('sub-menu');
    for(i=0;i<subMenu.length;i++) {
        subMenu[i].style.position = 'absolute';
        subMenu[i].style.left = '50%';
        subMenu[i].style.top = '100%';
        subMenu[i].style.width = '210px';
        subMenu[i].style.marginLeft = '-105px';
        subMenu[i].style.background = '#fafafa';
        subMenu[i].style.border = '1px solid #ededed';
        subMenu[i].style.zIndex = '5';
        subMenu[i].style.visibility = 'hidden';
        subMenu[i].style.opacity = '0';
        subMenu[i].style.transform = 'scale(0.8)';
        subMenu[i].style.transition = '.4s ease-in-out';
    }
    var subMenu_a=nav.querySelectorAll('.sub-menu li a');
    for (i=0;i<subMenu_a.length;i++){
        subMenu_a[i].style.padding='10px 0';
        subMenu_a[i].style.margin='0 10px';
        subMenu_a[i].style.borderBottom='1px solid #efefef';
        subMenu_a[i].style.fontSize='12px';
        subMenu_a[i].style.color='#484848';
        subMenu_a[i].style.fontFamily='"Kurale", serif';
    }
    nav_li_child.onmouseover=function () {
        var openSub=this.getElementsByClassName('sub-menu');
        openSub.style.visibility='visible';
        openSub.style.opacity='1';
        openSub.style.transform='scale(1)';
    };




}