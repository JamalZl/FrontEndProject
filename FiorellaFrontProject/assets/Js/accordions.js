// $(document).ready(function () {
//     $(".icon-title").click(function(){
//         let next=$(this).next();
//         $(".accordionText").not(next).slideUp();
//         $(this).next().slideToggle();
//     })
// })
$(document).ready(function () {
    $(".title-icon").click(function () {
        $(".accordionDesc").not($(this).next()).slideUp();
        $(this).next().slideToggle();
        

        //console.log($(this).parent().siblings().children().first().removeClass("accordionActive"));
        if ($(this).hasClass("accordionActive")) {
            $(this).removeClass("accordionActive")
        }else{
            $(this).toggleClass("accordionActive");
        }

        $(this).parent().siblings().children().first().removeClass("accordionActive")
        

    })

    $(".title-iconRight").click(function () {
        $(".accordionDescRight").not($(this).next()).slideUp();
        $(this).next().slideToggle();
        $(this).toggleClass("accordionActiveRight");
    })
})