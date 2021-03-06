//обвертка
function Container() {
    this.htmlCode='';
}
Container.prototype.render=function () {
    return this.htmlCode;
}
//класс меню
function Menu(myId,myClass,items) {
    Container.call(this);
    this.myId=myId;
    this.myClass=myClass;
    this.items=items;
}
Menu.prototype=Object.create(Container.prototype);
Menu.prototype.constructor=Menu;

Menu.prototype.render=function () {
    var code='<ul class="'+this.myClass+'" id="'+this.myId+'">';
    for (var i=0;i<this.items.length;i++){
        if (this.items[i] instanceof MenuItems){
            code+=this.items[i].render();
        }
    }
    code+='</ul>';
    this.htmlCode=code;
    return code;
}
Menu.prototype.remove=function () {
    if(document.getElementById(this.myId)) {
        document.getElementById(this.myId).parentNode.removeChild(document.getElementById(this.myId));
    }
}



//Меню со вложенностью
/**
 *
 * @param myId          ID главного меню
 * @param myClass       Класс главного меню
 * @param items         Пункты главного меню
 * @param subClass      Класс вложенного меню
 * @param subMenu       Ассоциативный массив, где имя массива - номер пункта для вставки доп. меню,
 *                      а элементы массива - пункты меню на основе класса Items
 * @constructor
 */
function SubMenu(myId,myClass,items,subClass,subMenu) {
    Menu.call(this,myId,myClass,items);
    this.subClass=subClass;
    this.subMenu=subMenu;
}
SubMenu.prototype=Object.create(Menu.prototype);
SubMenu.prototype.constructor=SubMenu;

SubMenu.prototype.render=function () {
    //Главное меню
    var code='<ul class="'+this.myClass+'" id="'+this.myId+'">';
    //Вывод элементов главного меню
    for (var i=0;i<this.items.length;i++){
        //Проверка принадлежности элементов к классу MenuItems
        if (this.items[i] instanceof MenuItems){
            //Выборка отдельной строки
            var liCode=this.items[i].render();
            //Разделение строки для вставки subMenu
            var mas=liCode.split('</a>');
            //Поиск пункта меню в котором будет вложенность
            if(i in subMenuItems){
                //Формирование новой строки с учетом вложенности
                liCode=mas[0]+'</a>';
                liCode+='<ul class="'+this.subClass+'">';
                //Создание пунктов subMenu
                for (var j=0;j<subMenuItems[i].length;j++){
                    liCode+=subMenuItems[i][j].render();
                }
                //Закрытие сформированной строки
                liCode+='</ul>'+mas[1];
            }
            //Добавление строки с пунктом меню к общему коду
            code+=liCode;
        }
    }
    code+='</ul>';
    this.htmlCode=code;
    return code;
}




//Элементы меню
function MenuItems(href,title) {
    this.href=href;
    this.title=title;
}
MenuItems.prototype.render=function () {
    return '<li><a href="'+this.href+'">'+this.title+'</a></li>';
}
//Класс кнопка
function Button(menuId,textButton) {
    this.menuId=menuId;
    this.textButton=textButton;
}
Button.prototype.render=function () {
    return '<button onclick="'+this.menuId+'.remove()">'+this.textButton+'</button>';
}

var button1=new Button('menu1','Удаление меню');
//Объект содержит информацию о пунктах фложенного меню. Имя - является указателем на место встаки subMenu в главое меню
var subMenuItems={
    2: [
        new MenuItems('http://www.huffingtonpost.com','The Huffington Post'),
        new MenuItems('http://mashable.com','Mashable'),
        new MenuItems('http://www.tmz.com','TMZ'),
        new MenuItems('http://perezhilton.com/','Perezhilton'),
        new MenuItems('http://gawker.com/','Gawker Media')
    ],
    4: [
        new MenuItems('http://www.oz.by','OZ.BY'),
        new MenuItems('http://www.ozon.ru/','OZON'),
        new MenuItems('http://www.amazon.com/','Amazon'),
        new MenuItems('http://ru.aliexpress.com/','Aliexpress')
    ]
}

var menu1=new Menu('my-menuID','my-menu',[
    new MenuItems('/','Главная'),
    new MenuItems('/about/','О компании'),
    new MenuItems('/blog/','Популярные блоги'),
    new MenuItems('/shops/','Реклама'),
    new MenuItems('/shops/','Магазины'),
    new MenuItems('/contacts/','Мы на карте')
]);

var menu2=new SubMenu('my-menuID','my-menu',[
    new MenuItems('/','Главная'),
    new MenuItems('/about/','О компании'),
    new MenuItems('/blog/','Популярные блоги'),
    new MenuItems('/shops/','Реклама'),
    new MenuItems('/shops/','Магазины'),
    new MenuItems('/contacts/','Мы на карте')
], 'sub-menu',subMenuItems);