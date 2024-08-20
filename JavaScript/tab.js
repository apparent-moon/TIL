var tabButton = $('.tab-button');
var tabContent = $('.tab-content');

/* tabButton.eq(0).on('click', function(){
    tabButton.removeClass('orange');
    tabButton.eq(0).addClass('orange');
    tabContent.removeClass('show');
    tabContent.eq(0).addClass('show');
})

$('.tab-button').eq(1).on('click', function(){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(1).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(1).addClass('show');
})

$('.tab-button').eq(2).on('click', function(){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(2).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(2).addClass('show');
}) */

for(let i = 0; i < 3; i++){
    $('.tab-button').eq(i).on('click', function() {
        tabButton.removeClass('orange');
        tabButton.eq(i).addClass('orange');
        tabContent.removeClass('show');
        tabContent.eq(i).addClass('show');
    });
};

/*
for (let i = 0; i < $('.tab-button').length; i++){

    $('.tab-button').eq(i).on('click', function(){
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(i).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(i).addClass('show');
    });

};

*/