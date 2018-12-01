    var can = document.getElementById("mycanvas");
    var ctx = can.getContext("2d");
    //画布宽度
    var wid = window.innerWidth;
    //画布高度
    var hei = window.innerHeight;
    can.width=wid;
    can.height=hei;
    
    //随机函数
    function random(min,max){ 
        return parseInt(Math.random()*(max-min)+min); 
    }

    function AnimationClass(){ 
        //雪花出现的坐标 
        this.x = random(0,can.width);
        this.y = random(0,can.height);
        this.radius = random(1,10); 
        this.color = "white"; 
        this.speed = random(1,3); 
        this.startAngle = 0;
        this.endAngle = Math.PI*2;
    } 
        //给雪花动画类添加一个方法 
    AnimationClass.prototype.draw = function(){ 
        ctx.fillStyle = this.color;
        //绘制雪花 
        ctx.beginPath(); 
        ctx.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle);//画圆 
        ctx.fill(); 
        ctx.restore(); 
        this.sport();//调用运动函数使雪花运动起来 
    }; 
        //雪花运动原型方法 
    AnimationClass.prototype.sport = function(){ 
        this.y += this.speed;//雪花运动方向上的值累加 
        this.x += this.speed;
    }; 
        
    //创建一个雪花对象 
    var Arr =[]; 
    function show(){ 
        can.height = can.height;//清除画布内容 
        var A = new AnimationClass(); 
        Arr.push(A);
        //调用创建的数组中雪花对象方法 
        for (var i in Arr){ 
        Arr[i].draw(); 
        } 
    requestAnimationFrame(show);//循环调用 
    } 
    show(); 
    


//以下是第一次写的，为什么不能直接把属性进行赋值，而是要像上面代码那样先写好当前属性再对目标进行赋值
//为什么要这种方法写圆就可以ctx.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle);
//这样写圆就不行    
//var p = this;
//  ctx.moveTo(p.x, p.y);
//  ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI, false)



    // var arr = []; //保存各圆坐标及半径
    // arr.push({
    //         x: Math.random() * wid,
    //         y: Math.random() * hei,
    //         r: Math.random() * 10 + 1
    //     })

    // function Person( x, y, r){
    //     //属性：每个对象的属性各不相同
    //     this.x = x;
    //     this.y = y;
    //     this.r = r;
    //     this.createSnow();
    // }
    
    // Person.prototype.createSnow = function(){
    //     this.x = Math.random() * wid;
    //     this.y = Math.random() * hei;
    //     this.r = Math.random() * 10 + 1;
    //     // ctx.clearRect(0, 0, wid, hei);
    //     // ctx.fillStyle = "white";
    //     // ctx.beginPath();
    //     // var p = this;
    //     // ctx.moveTo(p.x, p.y);
    //     // ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI, false)
    //     // ctx.fill();
    //     // SnowFall();
    //     // ctx.closePath();
    // }

    // function DrawSnow() {
    //     ctx.clearRect(0, 0, wid, hei);
    //     ctx.fillStyle = "white";
    //     ctx.beginPath();
    //         var p = arr[this];
    //         ctx.moveTo(p.x, p.y);
    //         ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI, false);
    //     ctx.fill();
    //     SnowFall();
    //     ctx.closePath();
    // }

    // // Person.prototype.SnowFall = function(){
    // //         var p =this;
    // //         p.y += Math.random() * 2 + 1;
    // //         if (p.y > hei) {
    // //             p.y = 0;
    // //         }
    // //         p.x += Math.random() * 2 + 1;
    // //         if (p.x > wid) {
    // //             p.x = 0;
    // //         }
    // //     }
    // // }
    // // setInterval(createSnow, 50);
    // // for(var i=0;i<100;i++){
    // //     var newFlower = new Person(x,y,r);
    // // }
