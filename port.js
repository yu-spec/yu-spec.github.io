// スライダーの設定
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
// スクロール時にそれぞれのコンテンツを出すコード
$(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.scrollanime').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 200) {
                $(this).addClass("fadeInDown");
            }
        });
    });
});
// 開閉ボタン
$(document).ready(function(){
  $(".sub-menutitle").on("click", function(){
    $(this).next().slideToggle(300);
    $(this).toggleClass("ac");
    $(this).next("sub-menutitle").slideToggle();
  });
});
// headerの途中からスクロールさせるコード（上からニョキッと）
$(function(){
  var $win = $(window),
    $menu = $('#nav').clone().addClass('menu').appendTo('body'),
    showClass = 'is-show';

    $win.on('load scroll', function(){
      var value = $(this).scrollTop();
      if(value > 600) {
        $menu.addClass(showClass);
      }else {
        $menu.removeClass(showClass);
      }
    });
});
// statusの動作に関するコード
$(function(){

  activateStatus();
  // Scene2を表示
  function activateStatus() {

    var $content = $('#status'),
        $charts = $content.find('.chart');

    // コンテンツが右から出てくる
    // $content.stop(true).animate({
    //   right: 0;
    // }, 1200, 'easeInOutQuint');

    // 円チャートごとの処理
    $charts.each(function(){
      var $chart = $(this),
      // マスクを保存し、角度０を指定
          $circleLeft = $chart.find('.left .circle-mask-inner')
              .css({transform: 'rotate(0)' }),
          $circleRight = $chart.find('.right .circle-mask-inner')
              .css({ transform: 'rotate(0)' }),
      // パーセンテージ値を取得
      $percentNumber = $chart.find('.percent-number'),
      percentData = $percentNumber.text();

      // パーセンテージの表示をいったん０に
      $percentNumber.text(0);

      // 角度のアニメーション
      $({percent: 0}).delay(1000).animate({
        percent: percentData
      }, {duration: 1500,
      progress: function(){
        var now = this.percent,
            deg = now * 360 / 100,
            degRight = Math.min(Math.max(deg, 0), 180),
            degLeft = Math.min(Math.max(deg - 180, 0), 180);
        $circleRight.css({ transform: 'rotate(' + degRight + 'deg)' });
        $circleLeft.css({ transform: 'rotate(' + degLeft + 'deg)' });
        $percentNumber.text(Math.floor(now));
      }
    });
  });
  }
});
// モーダルウインドウ
$(function(){
  $('.work-box').on('click', function(){
    // ボタンをクリックしたら、クリックしたい要素のdata属性を取得
    let target = $(this).data('modal-link');
    // 上記で取得した要素と同じclass名を持つ要素を取得
    let modal = document.querySelector('.' + target);
    // その要素にclassを付け替える
    $(modal).toggleClass('is-show');
  })

  // モーダルを閉じるときの動作
  $('.modal-bg').on('click', function(){
    $(this).parents('.modal').toggleClass('is-show');
  })
})
// トップページアイコンの効果
$(function(){
  var pagetop = $('#mmm');
  pagetop.hide();

  $(window).scroll(function(){
    if($(this).scrollTop()>800){
      pagetop.fadeIn();
    }else{
      pagetop.fadeOut();
    }
  });
  pagetop.click(function(){
    $('body,HTML').animate({
      scrollTop: 0},800);
      return false;
  });
});
