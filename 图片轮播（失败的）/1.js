
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
            i=4;
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

$(document).ready(function(){
    function rollOne(){
        $(".img-div").animate({left:"-500px"},2000,"linear",function(){
            $(this).css({left:"0px"});
            $(this).children("img").first().remove().clone(true).appendTo(".jg");
        });
    }
    var startRollOne=setInterval(rollOne,2000);
    $(".slide").hover(function () {
        clearInterval(startRollOne);
    }, function () {
        startRollOne=setInterval(rollOne,2000);
    });
});

//图片以及下标
function Show(){
    $(".jg").eq(i).slideIn(300).siblings().fadeOut(300);   
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
    },4000);
}



