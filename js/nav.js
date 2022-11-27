$('#home--link').on('click',function(e){
    e.preventDefault()
    $('html, body').animate({scrollTop: $('#home').offset().top}, 1000)
});
$('#stories--link').on('click',function(e){
    e.preventDefault()
    $('html, body').animate({scrollTop: $('#stories').offset().top}, 1000)
});