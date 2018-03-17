var Food=function (foodId, category, foodName, foodImg, calories, price, foodNumber, time) {
    this.foodId=foodId;
    this.category=category;
    this.foodName=foodName;
    this.foodImg=foodImg;
    this.calories=calories;
    this.price=price;
    this.foodNumber=foodNumber;
    this.time=time;
};

//Получение категории
Food.prototype.getCategory=function () {
    return this.calories;
};
//Получение ID товара
Food.prototype.getIdFood=function () {
    return this.foodId;
};
//Проверка на наличие товара
Food.prototype.validCheck=function (number) {

    if(number>this.foodNumber){
        return [false,number-this.foodNumber];
    }
    return [true,number];
};
//Списание товара
Food.prototype.reductionGoods=function (number) {
    var validMas=this.validCheck(number);
    if (validMas[0]==true){
        this.foodNumber-=number;
    }
    else alert('Для заказа позиции не хватает '+validMas[1]+' единиц товара.');
};


//Массив содержит весь асортимент товара
var shopFood=[
    new Food('001','hamburger','Малый гамбургер','img/small.jpg',20,50,6,300),
    new Food('002','hamburger','Средний гамбургер','img/middle.jpg',30,75,3,350),
    new Food('003','hamburger','Большой гамбургер','img/big.jpg',40,100,7,400),
    new Food('004','filling','Сыр','img/cheese.jpg',20,10,25,10),
    new Food('005','filling','Листья салата','img/salad.jpg',5,20,35,20),
    new Food('006','filling','Картофель','img/potato.jpg',10,15,39,25),
    new Food('007','filling','Грибы','img/boletus.jpg',15,10,9,12),
    new Food('008','additionally','Приправа','img/condiment.jpg',0,15,19,10),
    new Food('009','additionally','Майонез','img/mayo.jpg',5,20,23,10),
    new Food('010','additionally','Кетчуп','img/catsup.jpg',5,20,13,10),
    new Food('011','drinks','Чай','img/tea.jpg',7,15,50,60),
    new Food('012','drinks','Кофе','img/coffee.jpg',5,15,50,60)
];

//Класс формирует таблицу выбора товара по категориям
var Products=function (myClass, positionFood) {
    this.myClass=myClass;
    this.positionFood=positionFood;
};

//Метод формирует меню
Products.prototype.outputData=function () {
    var myData=this.myClass.split('-');
    var orderFood=document.getElementsByClassName('order-food');
    for(var i=0;i<this.positionFood.length;i++){
        if(this.positionFood[i] instanceof Food){
            if (myData[1]===this.positionFood[i].category){
                console.log('ok'+i);
            }
        }
    }
    return 0;

}

var shops=[
    new Products('menu-hamburger',shopFood),
    new Products('menu-filling',shopFood),
    new Products('menu-additionally',shopFood),
    new Products('menu-drink',shopFood)
    ];