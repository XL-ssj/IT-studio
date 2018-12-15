

$(document).ready(function () {
    $(".more").click(function(){
        var n=$(this).prev().val();
        var num=parseInt(n)+1;
        if(num==0){ return;}
        $(this).prev().val(num);
        $(".number").html(6599*num)
        $(".add").click(function () {

            $("#text-box").html(num)})
    });

    $(".less").click(function(){
        var n=$(this).next().val();
        var num=parseInt(n)-1;
        if(num==0){ return}
        $(this).next().val(num);
        $(".number").html(6599*num)
        $(".add").click(function () {

            $("#text-box").html(num)
        })
    })



})