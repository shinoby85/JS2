//Назначение обработчиков для главного меню
$('[data-id="menu-hamburger"]').click(function () {
    $('.order-food').empty();
    $('#menu .active').removeClass('active');
    $('[data-id="menu-hamburger"]').parent().addClass('active');
    shops[0].outputData();
});
$('[data-id="menu-filling"]').click(function () {
    $('.order-food').empty();
    $('#menu .active').removeClass('active');
    $('[data-id="menu-filling"]').parent().addClass('active');
    shops[1].outputData();
});
$('[data-id="menu-additionally"]').click(function () {
    $('.order-food').empty();
    $('#menu .active').removeClass('active');
    $('[data-id="menu-additionally"]').parent().addClass('active');
    shops[2].outputData();
});
$('[data-id="menu-drink"]').click(function () {
    $('.order-food').empty();
    $('#menu .active').removeClass('active');
    $('[data-id="menu-drink"]').parent().addClass('active');
    shops[3].outputData();
});
$('#order-food').on('click',function (event) {
    var orderPosition;
    for(var i=0;i<shopFood.length;i++){
        if(shopFood[i].getIdFood()==event.target.dataset.id) {
            //Уменьшение количества на единицу
            shopFood[i].reductionGoods(1);
            //Обновление информации на кнопках
            event.target.children[2].innerText = '(Осталось товара: ' + shopFood[i].getFoodNumber() + ')';
            //Изминение цвета наведения при отсутствии товара
            if (shopFood[i].getFoodNumber() <= 0) {
                event.target.onmouseover = function () {
                    this.style.boxShadow = '0 0 15px #ff00bf';
                }
            }
            else {
                event.target.onmouseout=function () {
                    this.style.boxShadow ='';
                }
            }
            //Запоминание заказа
            orderPosition=[shopFood[i].getIdFood(),1];
            setOrder(orderPosition);
            getOrderInfo();

            break;

        }
    }
})
