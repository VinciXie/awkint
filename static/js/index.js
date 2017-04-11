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
      clearActive()
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
  $(".members").find(".tabContent").eq(0).slideDown()
  $(".tabC").find(".tabContent").eq(0).slideDown()

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
  $('.background3,.background5').height(document.body.offsetHeight);

  //
  // $('#menu-main, .brand').localScroll();
  $('.navbar-nav').localScroll();
});
