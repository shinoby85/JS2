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
