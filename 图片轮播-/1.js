
// var i=0;var timer;
// $(function(){

//     $(".jg").eq(0).show();
//     ShowTime();
//     $(".tab").hover(function(){
//         i=$(this).index();
//         Show();
//         clearInterval(timer);
//     },function(){  
//         ShowTime();
//     });
//     //左边按钮
//     $(".btn1").click(function(){
//         clearInterval(timer);
//         if(i==0)
//         {
//             i=5;
//         }
//         i--;
//         Show();
//         ShowTime();
//     });
//     //右边按钮
//     $(".btn2").click(function(){
//         clearInterval(timer);
//         if(i==4)
//         {
//             i=-1;
//         }
//         i++;
//         Show();
//         ShowTime();
//     });
// });

// // $(document).ready(function(){
// //     function rollOne(){
// //         $(".img-div").animate({left:"-500px"},2000,"linear",function(){
// //             $(this).css({left:"0px"});
// //             $(this).children("img").first().remove().clone(true).appendTo(".jg");
// //         });
// //     }
// //     var startRollOne=setInterval(rollOne,2000);
// //     $(".slide").hover(function () {
// //         clearInterval(startRollOne);
// //     }, function () {
// //         startRollOne=setInterval(rollOne,2000);
// //     });
// // });

// //图片以及下标
// function Show(){
//     $(".jg").eq(i).show(function(){$(this).animate({left:"-500px"},1000)}).siblings().fadeOut(0);   
//     // $(".jg").eq(i).show().animate({right:'500px'},i);
//     //当轮播到对应的图片时给下面序号加上一个bg样式，其他移除样式bg。
//     $(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
// }


// //轮播过程方法
// function ShowTime() {
//     timer=setInterval(function(){
//         i++;
//         if(i==4)
//         {
//             i=0;
//         }
//         Show();
//     },5000);
// }


$(document).ready(function(){
    var slideBox = $(".slideBox");
    var ul = slideBox.find("ul");
    var one = slideBox.find("ul li").eq(0).width();
    var number = slideBox.find(".spanBox span");
    var timer = null;
    var go = 0;                    

    number.on("click",function (){
    $(this).addClass("active").siblings("span").removeClass("active");
    go=$(this).index();
    ul.animate({
           "right":one*go,    //ul标签的动画为向左移动；
              });
    });
    //左右按钮的控制效果
    $(".next").stop(true,true).click(function (){
        go++;
        if(go==number.length){go=0};
        number.eq(go).trigger("click");
        });
   $(".prev").stop(true,true).click(function (){
       go--;
       if(go==number.length){go=0};
       number.eq(go).trigger("click");
       });
   //定时器的使用，自动开始
   timer = setInterval(function (){
       go++;
       if(go==number.length){go=0};
       number.eq(go).trigger("click");
       },2000);
   //hover事件完成悬停和，左右图标的动画效果
   slideBox.hover(function(){
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