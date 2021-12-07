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

    // $(".menu-icon i").click(function () {
    //     $(".menu").css("display", "block")
    //     $(".menu").addClass("animate__fadeInRight")
    //     $(".menu").removeClass("animate__fadeOutRight")

    // })
    // $(".closeX i").click(function () {
    //     $(".menu").removeClass("animate__fadeInRight")
    //     $(".menu").addClass("animate__fadeOutRight")
    // })
    // $(".menuHomeLi a").click(function () {
    //     $(".menuHome").slideToggle();
    //     $(".menuHomeLi i").toggleClass("myRotate")
    // })

    // $(".menuPagesLi a").click(function () {
    //     $(".menuPages").slideToggle();
    //     $(".menuPagesLi i").toggleClass("myRotate");
    // })
    // $(".menuShopLi a").click(function () {
    //     $(".menuShop").slideToggle();
    //     $(".menuShopLi i").toggleClass("myRotate");
    // })
    // $(".pth4").click(function () {
    //     $(".pt").slideToggle();
    //     $(".pth4 i").toggleClass("myRotate");
    // })
    // $(".sph4").click(function () {
    //     $(".sp").slideToggle();
    //     $(".sph4 i").toggleClass("myRotate");
    // })
    // $(".sth4").click(function () {
    //     $(".st").slideToggle();
    //     $(".sth4 i").toggleClass("myRotate");
    // })
    // $(".slh4").click(function () {
    //     $(".sl").slideToggle();
    //     $(".slh4 i").toggleClass("myRotate");
    // })

    // $(".menuPortfolioLi a").click(function () {
    //     $(".menuPortfolio").slideToggle();
    //     $(".menuPortfolioLi i").toggleClass("myRotate");
    // })
    // $(".menuPortfolioLayoutsLi a").click(function () {
    //     $(".menuPortfolio-inner-layouts").slideToggle();
    //     $(".menuPortfolioLayoutsLi i").toggleClass("myRotate");
    // })
    // $(".menuPortfolioSingleLi a").click(function () {
    //     $(".menuPortfolio-inner-single").slideToggle();
    //     $(".menuPortfolioSingleLi i").toggleClass("myRotate");
    // })
    // $(".menuBlogLi a").click(function () {
    //     $(".menuBlog").slideToggle();
    //     $(".menuBlogLi i").toggleClass("myRotate");
    // })
    // $(".menuBlogPostLi a").click(function () {
    //     $(".menuBlog-inner-post").slideToggle();
    //     $(".menuBlogPostLi i").toggleClass("myRotate");
    // })

})