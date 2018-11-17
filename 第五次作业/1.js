
// var save=document.getElementById("save");
// var lst=document.getElementById("list")
// var put=document.getElementById("put");



function append(){
    var textl= $("#put").val()
    if (textl != "") {
    var li ="<li><span> "+textl+"</span><input type='button' value='X' id='add' onclick='remove()'></li>";
    $("#list").append(li);
    }
    // $("li").css('broder','1px solid black');这样也不行    
    // li.style.height="30px";
    // li.style.backgroundColor="grey";
    // li.style.border="1px solid black";不知道为什么这几句加进去就错了
}

function remove(){
    $("#add").parent().remove();
}

// $("input[type=button]").click(function(){
//     $("#add").parent('li').remove();
// })貌似不行

// function remove(){
//     this.parentNode.parentNode.removeChlid(this.parentNode)
// }是不是因为应用了jQuery所以原来的写法不行了？


// function remove(this){
//     this.parentNode.parentNode.remove(this.parentNode)
// } 一旦变成this，就不会出现点击添加li了