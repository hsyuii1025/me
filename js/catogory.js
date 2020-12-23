$(document).ready(function(){
    if($(window).width() > 500){
        /*lg*/
        $(".por").mouseenter(function(){
            $(".content_por").fadeTo(200,1)
            $(".title_por").css("color","#41D3BD")
            $(".por").css("background-color","#170312").css("border","1px solid #41D3BD")
        });    
        $(".por").mouseleave(function(){
            $(".content_por").fadeTo(600,0).css("transition-delay","s")
            $(".title_por").css("color","#170312")
            $(".por").css("background-color","#41D3BD")
        });
        /*mid*/
        $(".res").mouseenter(function(){
            $(".content_res").fadeTo(200,1)
            $(".title_res").css("color","#FFFFF2")
            $(".res").css("background-color","#170312").css("border","1px solid #FFFFF2")
        });    
        $(".res").mouseleave(function(){
            $(".content_res").fadeTo(600,0).css("transition-delay","s")
            $(".title_res").css("color","#170312")
            $(".res").css("background-color","#FFFFF2")
        });
        /*sm*/
        $(".soc").mouseenter(function(){
            $(".content_soc").fadeTo(200,1)
            $(".title_soc").css("color","#FDAB4A")
            $(".soc").css("background-color","#170312").css("border","1px solid #FDAB4A")
        });    
        $(".soc").mouseleave(function(){
            $(".content_soc").fadeTo(600,0).css("transition-delay","s")
            $(".title_soc").css("color","#170312")
            $(".soc").css("background-color","#FDAB4A")
        });
    
        /*go back*/
        $(".arrow_icon").mouseenter(function(){
            $(".hint").fadeTo(200,1)
        });
        $(".arrow_icon").mouseleave(function(){
            $(".hint").fadeTo(600,0)
        });
    }
});
