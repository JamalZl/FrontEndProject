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

    let myCartRight = document.querySelectorAll(".myCartRight")
    myCartRight.forEach(mCartRight => {
        mCartRight.onclick = function () {
            console.log("yes");
            let dataId = mCartRight.getAttribute("data-id")
            myCartRight.forEach(mcRight => {
                mcRight.classList.remove("tabActive")
            })
            let tabRight = document.getElementById(dataId)
            let tabsRight = document.querySelectorAll(".tabRight")
            tabsRight.forEach(tRight => {
                tRight.classList.add("d-none")
            })
            mCartRight.classList.add("tabActive")
            tabRight.classList.remove("d-none")
        }
    })
})