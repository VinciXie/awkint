$(function(){





  $(".box").click(function(){
    // 下拉菜单的效果
    var $this = $(this),
        $parent = $this.parent()
        data = $this[0];
        index = data.dataset.boxnumber
    // 点击的时候判断
    var clearActive = function() {
      console.log('clearActive');

      if ($parent.find(".tabContent")) {
        // 团队成员部分的下拉菜单
        $parent.children('.active').removeClass("active")
        $parent.find(".tabContent").slideUp()

      }
      if ($parent.next(".tabC")) {
        // 主要产品部分的下拉菜单
        var $tabC = $parent.next(".tabC")

        $tabC.find(".tabContent").slideUp()
      }
    }
    if($this.hasClass("active")) {
      // clearActive()
    } else {
      clearActive()
      // 当前是取消选中状态
      // 激活操作
      $this.addClass("active")
      // 对应的下拉框 展现
      if ($parent.find(".tabContent")) {
        $parent.children(".tabContent").eq(index).slideDown()
      }
      if ($parent.next(".tabC")) {
        var $tabC = $parent.next(".tabC")

        $tabC.find(".tabContent").eq(index).slideDown()
      }
    }
  });

  // 有两个下拉菜单是先展示出来的
  // $(".members").find(".tabContent").eq(0).slideDown()
  // $(".tabC").find(".tabContent").eq(0).slideDown()

// 轮播图
  $(".banner").unslider({
    autoplay: true,
    arrows: false,
    delay: 3000,
    // index: 1,
  })

  $('.scrollup').click(function(){
    // 点击回到顶部的动画
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });

  // background 3 和 5 的高度 和 body 一样高
  // $('body').height()
  // $('.background3,.background5').height(document.body.offsetHeight);

  // 把三横变成 x
  $("#bs-example-navbar-collapse-1 > .nav > li > a").click(function() {
    if($(window).width() < 760) {
      // $("#bs-example-navbar-collapse-1").slideUp('fast')
      $(".navbar-header > button").eq(0).show()
      $(".navbar-header > button").eq(1).hide()
    }
  })

  // 飞到特定位置
  $('.navbar-nav').localScroll();

  // set navbar size when loading
  if($(window).width() < 760) {
      // $("#bs-example-navbar-collapse-1").css("height", $(window).height() - 55)
      $("#bs-example-navbar-collapse-1").css("height", $(window).height())
  }
  $(".navbar-toggle").click(function() {
      var index = this.dataset.index
      console.log('index', index);
      if(index == 0) {
          // $("#bs-example-navbar-collapse-1").show()
          $("#bs-example-navbar-collapse-1").slideDown()
          // $(this).hide()
          // $(this).parent().hide()
      } else if(index == 2) {
          // $("#bs-example-navbar-collapse-1").hide()
          $("#bs-example-navbar-collapse-1").slideUp()
            // $(this).parent().prev().show()
          // $(".navbar-toggle").eq(0).show()
      }
  })
  $(".navbar-nav li").click(function() {
    $(this).parents("#bs-example-navbar-collapse-1").slideUp()
  })

});
