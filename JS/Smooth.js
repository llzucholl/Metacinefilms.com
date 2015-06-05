/* Smooth scrolling para anclas */
$('a[href*=#]').click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 700);
    event.preventDefault();
});