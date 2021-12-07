$(document).ready(function () {
    let myCart = document.querySelectorAll(".myCart")
    myCart.forEach(mCart => {
        mCart.onclick = function () {
            let dataId = mCart.getAttribute("data-id")
            myCart.forEach(mc => {
                mc.classList.remove("tabActive")
            })
            let tab = document.getElementById(dataId)

            let tabs = document.querySelectorAll(".tab")
            tabs.forEach(t => {
                t.classList.add("d-none")
            })
            mCart.classList.add("tabActive")
            tab.classList.remove("d-none")
        }
    })
})