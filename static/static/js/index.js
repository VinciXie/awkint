
$(function(){

  $(".box").click(function(){
    // 下拉菜单的效果
    var $this = $(this),
        $parent = $this.parent(),
        data = $this[0],
        index = data.dataset.boxnumber;
    var $tabC = $parent.next(".tabC")
    // 点击的时候判断
    var clearActive = function() {
      // console.log('$parent.next(".tabC").length', $parent.next(".tabC").length);
      $parent.children('.active').removeClass("active")
      if ($parent.next(".tabC").length > 0) {
        // 主要产品部分
        // 的下拉菜单
        $tabC.find(".tabContent").slideUp()
      } else {
        // 团队成员部分的下拉菜单
        // console.log('clearActive2');
        $this.next(".tabContent").slideUp()
      }
    }

    if($this.hasClass("active") || $parent.hasClass("active")) {
      // console.log('clearActive');
      if (!this.closest("#product")) {
        // console.log('clearActive members');
        clearActive()
      }
    } else {
      clearActive()
      // console.log('addActive');
      // 当前是取消选中状态
      // 激活操作
      $this.addClass("active")
      // 对应的下拉框 展现
      // console.log('$this', $this);
      // console.log('$this.find(".tabContent")', $this.find(".tabContent"));
      if ($this.next(".tabContent").length) {
        // 团队成员部分的下拉菜单
        // console.log('tabContent');
        $this.next(".tabContent").slideDown()
      } else {
        // console.log('$tabC', $tabC);
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
    var _this = this
      var index = $(this).hasClass('active')

      // console.log('index', index);
      if(index == false) {
        $(_this).addClass('active')
          // $("#bs-example-navbar-collapse-1").show()
          $("#bs-example-navbar-collapse-1").slideDown(function() {
            // console.log('this', this);
            $(this).find("a").fadeIn()
            $('body').addClass('qrpy')
          })
          // $(this).hide()
          // $(this).parent().hide()
      } else if(index == true) {
          // $("#bs-example-navbar-collapse-1").slideUp("normal", function() {
          //   $(this).find("a").fadeOut()
          // })
          $("#bs-example-navbar-collapse-1").find("a").fadeOut(function() {
            // console.log('this', this);
            $(_this).removeClass('active')
            $("#bs-example-navbar-collapse-1").slideUp(
              function() {
                $('body').removeClass('qrpy')
              }
            )
          })
            // $(this).parent().prev().show()
          // $(".navbar-toggle").eq(0).show()
      }
  })
  $(".navbar-nav li").click(function() {
    $(this).parents("#bs-example-navbar-collapse-1").slideUp().find("a").fadeOut(function() {
      $('body').removeClass('qrpy')
      $(".navbar-toggle").removeClass('active')
    })
  })

  var chineseAll = $('*').text()
  // 去掉字符串里数字和空格和字母和符号的函数
  var number = '0123456789 abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ<>;@#{}_《》:-.()/%'
  function deleteNumberFromS(s) {
    let s1 = ''
    for (var i = 0; i < s.length; i++) {
      if (!number.includes(s[i])) {
        s1 += s[i]
      }
    }
    return s1
  }

  var firstfont = $('.navbar-nav, #company').text()

  var a1 = deleteNumberFromS(firstfont)
  var arr1 = Array.from(new Set(a1))
  var s2 = arr1.join('')
  // console.log('s2', s2);

});
