function checkname(){
    var txt1=document.getElementById("text1");
    if(txt1.value==""){
        alert("内容不能为空哦！");
    }
    if(txt1.value.length > 7){
        alert("姓名不能超过7个字哦！");
    }else return true;
}

function checkgrade(){
    var txt2=document.getElementById("text2");
    if(txt2.value==""){
        alert("内容不能为空哦！");
    }
    if(txt2.value != "2010"||"2011"||"2012"||"2013"||"2014"){
        alert("仅允许2010-2014哦！")
    }else return true;
}

function checkphonenumber(){
    var txt3=document.getElementById("text3");
    if(txt3.value==""){
    }
    if(txt3.value.length > 11||txt3.value.length < 11){
        alert("请填写正确的手机号码哦！");
    }else return true;
}

function checkemail(){
    var txt4=document.getElementById("text4");
    if(txt4.value==""){
        alert("内容不能为空哦！");
    }
    if(txt4.value != "/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/"){
        alert("请填写正确的邮箱哦！");
    }else return true;
}

function checkintroduct(){
    var txt5=document.getElementById("text5");
    if(txt5.value==""){
        alert("内容不能为空哦！");
    }
    if(txt5.value.length > 100){
        alert("请不要超过100字哦！");
    }else return true;
}

// function checkall(){
//     if(checkname()==true&&checkgrade()==true&&checkphonenumber()==true&&checkemail()==true&&checkintroduct()==true)
//     alert("OK!");
// }else return false;