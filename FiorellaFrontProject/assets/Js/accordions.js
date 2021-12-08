$(document).ready(function () {
    $(".icon-title").click(function(){
        let next=$(this).next();
        $(".accordionText").not(next).slideUp();
        $(this).next().slideToggle();
    })
})
// $(document).ready(function() {
//     $(".title-icon").click(function() {
//         let next = $(this).next();
//         let icon = $(this).children(".icon");
//         $(".article").not(next).slideUp();
//         $(this).next().slideToggle();
//         $(".icon").not(icon).removeClass("active")
//         icon.toggleClass("active")
//     })
// })