$(document).ready(function () {
    $(".menu-icon i").click(function () {
        $(".menu").css("display", "block")
        $(".menu").addClass("animate__fadeInRight")
        $(".menu").removeClass("animate__fadeOutRight")
    })
    $(".closeX i").click(function () {
        $(".menu").removeClass("animate__fadeInRight")
        $(".menu").addClass("animate__fadeOutRight")
    })
    $(".menuHomeLi a").click(function () {
        $(".menuHome").slideToggle();
        $(".menuHomeLi i").toggleClass("myRotate")
    })

    $(".menuPagesLi a").click(function () {
        $(".menuPages").slideToggle();
        $(".menuPagesLi i").toggleClass("myRotate");
    })
    $(".menuShopLi a").click(function () {
        $(".menuShop").slideToggle();
        $(".menuShopLi i").toggleClass("myRotate");
    })
    $(".pth4").click(function () {
        $(".pt").slideToggle();
        $(".pth4 i").toggleClass("myRotate");
    })
    $(".sph4").click(function () {
        $(".sp").slideToggle();
        $(".sph4 i").toggleClass("myRotate");
    })
    $(".sth4").click(function () {
        $(".st").slideToggle();
        $(".sth4 i").toggleClass("myRotate");
    })
    $(".slh4").click(function () {
        $(".sl").slideToggle();
        $(".slh4 i").toggleClass("myRotate");
    })

    $(".menuPortfolioLi a").click(function () {
        $(".menuPortfolio").slideToggle();
        $(".menuPortfolioLi i").toggleClass("myRotate");
    })
    $(".menuPortfolioLayoutsLi a").click(function () {
        $(".menuPortfolio-inner-layouts").slideToggle();
        $(".menuPortfolioLayoutsLi i").toggleClass("myRotate");
    })
    $(".menuPortfolioSingleLi a").click(function () {
        $(".menuPortfolio-inner-single").slideToggle();
        $(".menuPortfolioSingleLi i").toggleClass("myRotate");
    })
    $(".menuBlogLi a").click(function () {
        $(".menuBlog").slideDown();
        $(".menuBlogLi i").toggleClass("myRotate");
    })
    $(".menuBlogPostLi a").click(function () {
        $(".menuBlog-inner-post").slideToggle();
        $(".menuBlogPostLi i").toggleClass("myRotate");
    })

    ///////////goToTop///////////
    $(window).scroll(function () {
        if (window.scrollY >= 650) {
            $(".goUp").removeClass("d-none")
        }
        if (window.scrollY <= 650) {
            $(".goUp").addClass("d-none")
        }
    })
    $(".goUp").click(function () {
        $(window).scrollTop(0);
    })
    ///////////goToTop////////////

    ////////Basket////////
    let addToCards = document.querySelectorAll("#productList .products .product .text")
    let products = document.querySelector(".basketProducts")

    addToCards.forEach(addToCard => {
        addToCard.onclick = function () {
            let Id = this.parentNode.parentNode.parentNode.getAttribute("data-id")
            let img = this.parentNode.parentNode.parentNode.firstElementChild.lastElementChild.getAttribute("src")
            let name = this.parentNode.parentNode.parentNode.children[1].innerText;
            let price = this.parentNode.children[1].firstElementChild.innerText

            if (localStorage.getItem("basket") == null) {
                localStorage.setItem("basket", JSON.stringify([]))
            }
            let basket = JSON.parse(localStorage.getItem("basket"))

            let isExcistedProduct = basket.find((b) => b.id == Id);

            if (isExcistedProduct === undefined) {
                let product = {
                    id: Id,
                    image: img,
                    name: name,
                    price: price,
                    count: 1,
                };
                basket.push(product);
                getBasketProductBody(product)
            } else {
                let count = document.getElementById(`${isExcistedProduct.id}`);
                +count.innerHTML++;
                isExcistedProduct.count++;
            }
            localStorage.setItem("basket", JSON.stringify(basket));
            countCalculator();
            totalPrice();
        };
    });
    countCalculator();

    function countCalculator() {
        if (localStorage.getItem("basket") == null) {
            localStorage.setItem("basket", JSON.stringify([]))
        }
        let elementCount = document.querySelector(".basketProductCount")
        let basket = JSON.parse(localStorage.getItem("basket"));
        if (basket.length == null) {
            basket = localStorage.setItem("basket", JSON.stringify([]))
        }
        elementCount.innerHTML = basket.length;
    }
    totalPrice();

    function totalPrice() {
        let basketTotalPrice = document.querySelectorAll(".basketTotalPrice");
        let basket = JSON.parse(localStorage.getItem("basket"));
        let basketTotal = basket.reduce((basketTotal, bt) => {
            return (basketTotal += +bt.price * bt.count);
        }, 0);
        basketTotalPrice.forEach(b => {
            b.innerHTML = "(" + basketTotal + "$)";
        })
    }
    getProduct();

    function getProduct() {
        let basket = JSON.parse(localStorage.getItem("basket"))
        basket.forEach(b => {
            getBasketProductBody(b);
        })
    }

    function getBasketProductBody(product) {
        products.innerHTML += `<li data-id="basket1">
                  <div class="basketImage">
                <img src="${product.image}" alt="">
            </div>
            <div class="name-price">
                <p>${product.name}</p>
                <span id="${product.id}">${product.count}</span><span class="x">x</span>
                <span >${product.price}<span>$</span></span>
            </div>
            <i class="remove fas fa-times"></i>
        </li>`
    }
////StickyNavbar/////


    // $(".remove").click(function () {
    //     this.parentElement.remove();
    //     localStorage.clear();

    // })
    //////Basket//////

})
// function removeItem(id){
//     let basket= JSON.parse(localStorage.getItem("basket"))
//     const newItemsSet=basket.filter(i =>i.id !==id)
//     localStorage.setItem("basket",JSON.stringify(newItemsSet))

//  }
// function removeProduct(pr) {
//     removeItem(pr.parentNode.getAttribute("data-id"))
//     pr.parentElement.remove();
//     countCalculator();
//     totalPrice();
// }