$(function(){
$('.slide a').click(function(evt){
evt.preventDefault();
$('.lightbox').toggleClass('open');
});
});

$(function(){
$('.slide a').click(function(){
var pathImg = $(this).attr('href');
var newImg = $('<img src="' +pathImg+ '">');
var oldImg = $('.box img');
newImg.hide();
$('.box').prepend(newImg);
newImg.fadeIn();
oldImg.fadeOut(100, function(){
$(this).remove();
});
});
});

$(function(){
$('.slide').click(function(evt){
evt.preventDefault();
var txt = $(this).data("txt");
var oldTxt = $('.text p');
var newTxt = $('<p>' +txt+ '</p>');
newTxt.hide()
$(".text").prepend(newTxt);
newTxt.fadeIn();
oldTxt.fadeOut(100, function(){
$(this).remove();	
});
});
});

$(function(){
$('.slider').slick({
   dots:false,
   speed: 500,
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1
});
});