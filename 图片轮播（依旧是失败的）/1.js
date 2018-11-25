
var i=0;var timer;
$(function(){

    $(".jg").eq(0).show();
    ShowTime();
    $(".tab").hover(function(){
        i=$(this).index();
        Show();
        clearInterval(timer);
    },function(){  
        ShowTime();
    });
    //左边按钮
    $(".btn1").click(function(){
        clearInterval(timer);
        if(i==0)
        {
            i=5;
        }
        i--;
        Show();
        ShowTime();
    });
    //右边按钮
    $(".btn2").click(function(){
        clearInterval(timer);
        if(i==4)
        {
            i=-1;
        }
        i++;
        Show();
        ShowTime();
    });
});

// $(document).ready(function(){
//     function rollOne(){
//         $(".img-div").animate({left:"-500px"},2000,"linear",function(){
//             $(this).css({left:"0px"});
//             $(this).children("img").first().remove().clone(true).appendTo(".jg");
//         });
//     }
//     var startRollOne=setInterval(rollOne,2000);
//     $(".slide").hover(function () {
//         clearInterval(startRollOne);
//     }, function () {
//         startRollOne=setInterval(rollOne,2000);
//     });
// });

//图片以及下标
function Show(){
    $(".jg").eq(i).show(function(){$(this).animate({left:"-500px"},1000)}).siblings().fadeOut(0);   
    // $(".jg").eq(i).show().animate({right:'500px'},i);
    //当轮播到对应的图片时给下面序号加上一个bg样式，其他移除样式bg。
    $(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
}


//轮播过程方法
function ShowTime() {
    timer=setInterval(function(){
        i++;
        if(i==4)
        {
            i=0;
        }
        Show();
    },5000);
}















//还是不会用overflow


// var slideIndex = 3;   //记录初始图片的下标( 默认最初展示第四张图片，下标从0开始，所以初始值为3 )
// //左边按钮的点击事件
// $("#slideLeftBtn").on("click",function(){
//     // 点击左按钮的时候想要显示当前图片的前一张，所以slideIndex值要减去1
//     slideIndex--;
//     // animateLength表示想要让slideImageLists移动到什么位置，slideImageLists 的位置由 left属性来控制
// 　　 var animateLength = slideIndex * (-600) + "px";
//     $(".slideImageLists").animate({"left":animateLength},"slow",function(){
//         // animate的回调函数(即执行完动画之后才会执行函数里面的内容)
//         if(slideIndex <= 0){
//             $(".slideImageLists").css({"left":"-1800px"});
//             slideIndex = 3;
//         }
//     });
// })
// //右边按钮的点击事件
// $("#slideRightBtn").on("click",function(){
//     // 点击右按钮的时候想要显示当前图片的后一张，所以slideIndex值要加上1
//     slideIndex++;
//     var animateLength = slideIndex * (-600) + "px";
//     $(".slideImageLists").animate({"left":animateLength},"slow",function(){
// 　　　　　if(slideIndex >= 6){
//             $(".slideImageLists").css({"left":"-1800px"});
//             slideIndex = 3;
//         }
//     })
// })
