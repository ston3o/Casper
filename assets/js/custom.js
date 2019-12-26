var titles = document.querySelectorAll('.post-card-title');

[].forEach.call(titles, function(title) {
    title.innerHTML = title.innerHTML.replace(" ?", "&nbsp;?");
});

$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });
});
