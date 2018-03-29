$(function () {
    var $menu = $('.menu ul .listItems');
    var $content = $('.content .menu-list');
    $('#list-1').show();

    $($menu).on('click', function (event) {
        var lastDataItems=$menu.filter('.menu-active');
        lastDataItems.removeClass('menu-active');
        $('#list-'+lastDataItems[0].id.split('-')[1]).hide('slow');
        //$content.filter('.list-active').removeClass('list-active');
        //$content.filter('.list-active').
        var dataItems = event.target.id.split('-');
        $('#menuItems-' + dataItems[1]).addClass('menu-active');
        //$('#list-' + dataItems[1]).addClass('list-active');
        $('#list-' + dataItems[1]).show('slow');


    })
});