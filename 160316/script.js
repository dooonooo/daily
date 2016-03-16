window.onload = function() {
    var obtn = document.getElementById('backToTop');
    var clientHeight = document.documentElement.clientHeight;
    var timer = null;
    var isTop = true;

    //滚动条滚动时触发
    window.onscroll = function() {
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (osTop >= clientHeight) {
            obtn.style.display = "block";
        } else {
            obtn.style.display = "none";
        }
        if (!isTop) {
            clearInterval(timer);
        }
        isTop = false;

    }

    obtn.onclick = function() {




        //设置定时器
        timer = setInterval(function() {
        //获取滚动条距离顶部的高度
        //document.documentElement.scrollTop为IE识别
        //document.body.scrollTop 非IE浏览器
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            var ispeed = Math.floor(-osTop / 5);

            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
            isTop = true;
            if (osTop == 0) {
                clearInterval(timer);
            }
            console.log(osTop);
        }, 30);
    }
}
