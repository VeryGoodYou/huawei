/*提示框*/
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
/*搜索淡出淡入*/
$(document).ready(function () {
    $('.sou').click(function () {
        $('.chu').fadeToggle(1000);
    })
})
/*滚动监听*/
$(document).ready(function () {
    $(window).scroll(function () {
        var top =$(document).scrollTop();
        if(top>100){
            $(".dg").hide();
        }else {
            $(".dg").show();
        }
    })
})
/*top*/
$(document).ready(function () {
    $(window).scroll(function () {
        var top =$(document).scrollTop();
        if(top>100){
            $(".tp").show();
        }else {
            $(".tp").hide();
        }
    })
})
/*鼠标触发事件*/
$(function (){
    //显示隐藏
    $(".shi").click(function (){
        var flag = $(".xia").is(":hidden");
        if(flag){
            $(".xia").show();
        }else{
            $(".xia ").hide();
        }
    });



    //鼠标的移入移出
    $(".xia").mouseover(function (){
        $(".shi").show();
    }).mouseout(function (){
        $(".shi").hide();
    });


    //合成事件 hover()
    $(".xia").hover(function (){
        $(".shi").show();
    },function (){
        $(".shi").hide();
    });
});
/**/
$(function (){
    //显示隐藏
    $(".shu").click(function (){
        var flag = $(".su").is(":hidden");
        if(flag){
            $(".su").show();
        }else{
            $(".su ").hide();
        }
    });



    //鼠标的移入移出
    $(".shu").mouseover(function (){
        $(".su").show();
    }).mouseout(function (){
        $(".su").hide();
    });


    //合成事件 hover()
    $(".shu").hover(function (){
        $(".su").show();
    },function (){
        $(".su").hide();
    });
});
/*six*/
$(function (){
    //显示隐藏
    $(".six").click(function (){
        var flag = $(".si").is(":hidden");
        if(flag){
            $(".si").show();
        }else{
            $(".si ").hide();
        }
    });



    //鼠标的移入移出
    $(".six").mouseover(function (){
        $(".si").show();
    }).mouseout(function (){
        $(".si").hide();
    });


    //合成事件 hover()
    $(".six").hover(function (){
        $(".si").show();
    },function (){
        $(".si").hide();
    });
});
/*er*/
$(function (){
    //显示隐藏
    $(".er").click(function (){
        var flag = $(".e").is(":hidden");
        if(flag){
            $(".e").show();
        }else{
            $(".e ").hide();
        }
    });



    //鼠标的移入移出
    $(".er").mouseover(function (){
        $(".e").show();
    }).mouseout(function (){
        $(".e").hide();
    });


    //合成事件 hover()
    $(".er").hover(function (){
        $(".e").show();
    },function (){
        $(".e").hide();
    });
});
/*san*/
$(function (){
    //显示隐藏
    $(".san").click(function (){
        var flag = $(".s").is(":hidden");
        if(flag){
            $(".s").show();
        }else{
            $(".s ").hide();
        }
    });



    //鼠标的移入移出
    $(".san").mouseover(function (){
        $(".s").show();
    }).mouseout(function (){
        $(".s").hide();
    });


    //合成事件 hover()
    $(".san").hover(function (){
        $(".s").show();
    },function (){
        $(".s").hide();
    });
});