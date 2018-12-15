$(document).ready(function () {var i=0;
    $(".sort-box ul").bind("click",function () {$(".sort-box li").css("display","block")

         $(".sort-box li").on("click",function () {
                $(this).siblings('.sort-box li').removeClass('artifact');
                $(this).addClass('artifact');

             var index=$(this).index()
             var top=-70*index+15
             $(".sort-box ul").css('marginTop',top);


    })



        })
var i=0
$(".add").click(function () {
    i=i+1
    $("#text-box").html(i)
})




  var currentPage=Number(7);
    $("#page_btn2").text(currentPage - 2);
    $("#page_btn3").text(currentPage - 1);
    $("#page_btn4").text(currentPage);
    $("#page_btn5").text(currentPage + 1);
    $("#page_btn6").text(currentPage + 2);
    $("#page_btn7").text(pageNum);
    $("button").on("click",function () {
        currentPage =Number( $(this).text())
        touch(currentPage)
    })


})
var pageNum=Number(54);

function touch(currentPage ) {
    $("#page_btn2").text(currentPage - 2);
    $("#page_btn3").text(currentPage - 1);
    $("#page_btn4").text(currentPage);
    $("#page_btn5").text(currentPage+1);
    $("#page_btn6").text(currentPage+2);
    $("#page_btn7").text(pageNum);

    if (currentPage == 1) {
        $("#prePage").hide();
    }

    if (currentPage == pageNum) {
        $("#sufPage").hide();
    }


    if (currentPage <= 3) {
        $("#prePoint").hide();
        $("#page_btn1").hide();
    }
    else if (currentPage == 4) {
        $("#prePoint").hide();
    }

    if (currentPage == 1) {
        $("#page_btn2").hide();
        $("#page_btn3").hide();
    }
    else if (currentPage == 2) {
        $("#page_btn2").hide();
    }

    if (currentPage >= pageNum - 2) {
        $("#sufPoint").hide();
        $("#page_btn7").hide();
    }
    else if (currentPage == pageNum - 3) {
        $("#sufPoint").hide();
    }

    if (currentPage == pageNum) {
        $("#page_btn5").hide();
        $("#page_btn6").hide();
    }

    if (currentPage == pageNum - 1) {
        $("#page_btn6").hide();
    }
}