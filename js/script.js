$('.hiring--items > div').on('click', function(){
    $(this).children('.hiring--icon').toggleClass('hiring--rotate--icon');
    $(this).next('.hiring--text').slideToggle(300);
    $(this).parent('.hiring--items').toggleClass('change--color');
    $(this).children('.hiring--about').toggleClass('change--color--about');
});
$('.features--item > div').on('click', function(){
    $(this).children('.features--hr').toggleClass('change--hr');
    $(this).next('.item--text').slideToggle(300);
    $(this).parent('.features--item').toggleClass('item--color');
});
