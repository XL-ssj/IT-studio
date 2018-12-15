$(document).ready(function(){
    var lunbo = $(".lunbo");
    var ul = lunbo.find("ul");
    var one = lunbo.find("ul li").eq(0).width();
    var number = lunbo.find(".header-point span");
    var timer = null;
    var go = 0;                    

    number.on("click",function (){
    $(this).addClass("active").siblings("span").removeClass("active");
    go=$(this).index();
    ul.animate({
           "right":one*go,    //ul标签的动画为向左移动；
              });
    });
   //定时器的使用，自动开始
   timer = setInterval(function (){
       go++;
       if(go==number.length){go=0};
       number.eq(go).trigger("click");
       },2000);
   //hover事件完成悬停和，左右图标的动画效果
   lunbo.hover(function(){
       $(".next,.prev").animate({
           "opacity":1,
           },200);
       clearInterval(timer);
       },function(){
           $(".next,.prev").animate({
               "opacity":0.5,
               },500);
       timer = setInterval(function (){
       go++;
       if(go==number.length){go=0};
       number.eq(go).trigger("click");
       },2000);
           })
   
})