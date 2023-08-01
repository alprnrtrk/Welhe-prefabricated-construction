// navbar için mobil menü kodu

$("[data-role]").on("click", function () {
    let dataRole = $(this).attr("data-role");

    if (dataRole == "toggler") {
        let dataTarget = $(this).attr("data-target");

        $(this).toggleClass("active");
        $(dataTarget).toggleClass("active");
    }
})

// mega menu için default hover efektinin iptali için gerekli kod

$(".mega-menu__content > ul > li").mouseenter(function () {
    $(this).removeClass("active");
})

$(".mega-menu__content > ul").mouseleave(function () {
    $(".mega-menu__content > ul > li:first-child").addClass("active");
})

//tabs lerin çalışması için gereken kod

$("[data-role]").on("click", function(){
    let dataRole = $(this).attr("data-role");

    if(dataRole == "tabs"){
        let dataTarget = $(this).attr("data-target");

        $(this).parent().parent().find("button").removeClass("active");
        $(this).addClass("active");

        $(dataTarget).parent().find("ul").removeClass("active");
        $(dataTarget).parent().find("li").removeClass("active");
        $(dataTarget).addClass("active");
    }
})