$(document).ready(function(){
    $("#arrow").click(function (){
        $('html, body').animate({
            scrollTop: $("#start").offset().top
        }, 2000);
    });

    $(".btn").mouseenter(function(){
        $(".btn_content").css("color","#170312").css("letter-spacing","15px")
        $(".btn").css("background-color","#41D3BD")
    });
    $(".btn").mouseleave(function(){
        $(".btn_content").css("color","#41D3BD").css("letter-spacing","5px")
        $(".btn").css("background-color","#170312")
    });

});
