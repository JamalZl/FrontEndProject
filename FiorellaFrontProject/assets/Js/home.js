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

   let addToCards=document.querySelectorAll("#productList .products .product .text")
   let products=document.querySelector(".basketProducts")

   addToCards.forEach(addToCard =>{
       addToCard.onclick=function(e){
           let Id=this.parentNode.parentNode.parentNode.getAttribute("data-id")
           let img=this.parentNode.parentNode.parentNode.children[0].children[0].getAttribute("src")
           console.log(img);
       }
   })
})