$(function(){
    // $(".box").eq(0).click(function () {
    //     // $(".tabContent").hide()
    //     // $(".tabContent").eq(0).fadeToggle("slow","linear");
    //
    // })

    $(".box").click(function(){
        var $this = $(this),
            data = $this[0];
            index = data.dataset.boxnumber
        // 点击的时候判断
        var clearActive = function() {
          $('.active').removeClass("active")
          $('.rotate135').removeClass("rotate135")
          $(".tabContent").slideUp()
        }
        if($this.hasClass("active")) {
          clearActive()
        } else {
          clearActive()
          // 当前是取消选中状态
          // 激活操作
          $this.addClass("active")
          // 给子元素加上 rotate135
          $this.children('span').addClass('rotate135')
          // 对应的下拉框 展现
          $(".tabContent").eq(index).slideDown()
        }
    });

});
