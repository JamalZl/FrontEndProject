$(document).ready(function () {


    $('.parallax-window').parallax({
        imageSrc: '../assets/images/parallaxImg.jpg'
    });
    let image = document.getElementById('loop')

    let images = ['../assets/images/h3-slider-background.jpg', '../assets/images/h3-slider-background-3.jpg', '../assets/images/h3-slider-background-2.jpg']

    $(image).css("opacity", "100")

    setInterval(function () {
        let random = Math.floor(Math.random() * 3);
        image.src = images[random]
    }, 3000);

    $(".clickright").click(function () {
        let random = Math.floor(Math.random() * 3);
        image.src = images[random]
    })
    $(".clickleft").click(function () {
        let random = Math.floor(Math.random() * 3);
        image.src = images[random]
    })
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $("#productList .title-filter .productTitle #productListCategory").click(function(){
        $("#productList .title-filter .productTitle #dropDownCategory").slideToggle();
    })
})