//ページ読み込み完了後、実施するように
$(document).ready(function() {

//初期値入力
  var menu = $('#menu'),
      closeArea = $('.closeArea'),
      slideButton = $('.slideButton'),
      content = $('body'),
      layer = $('#layer'),
      menuWidth = menu.outerWidth(),  //メニューの幅
//      win = $(window).width(),  //windouwの幅⇒不要
      g_allul = $('.menu_f02 > li > ul'); //グローバル変数として指定


//  console.log(g_allul);
//  console.log(menuWidth);

  if(menuWidth<500){      //  menuWidthが、500以下のときに実行
  //a要素を無効にする
    $('a.disable').each(function(){
      $(this).removeAttr('href');
      $(this).removeAttr('target');
//          $(this).attr('href','#');
//          $(this).attr('target','_self');
    });
  };


//アコーディオン
//  var class_closed = 'closed'; // 閉じるためのクラスを定義　⇒不要
	$('.menu_f02 > li').each(function(){
		// jQueryオブジェクトを用意
	   var li = $(this);
     var allul = li.children('ul');

  //   console.log(allul); //debug

    // 全てを閉じる関数
    function closeAll(){
//      allul.addClass(class_closed); // 全てのulのクラスに 'closed' 追加
      allul.hide(); // 全てのulのクラスに 'closed' 追加
    }
    // 指定された要素を開く関数
    function open(ul){
//      ul.removeClass(class_closed); // ulのクラスから 'closed' 削除
      ul.show(); // ulのクラスから 'closed' 削除
    }
    // まずは全てのddを閉じる
    closeAll();
  }); //each(function)のend

  // イベントを設定、クリックしたとこの動作
  $(".menu_f02 > li").click(function() {

    if(menuWidth<500){      //  menuWidthが、500以下のときに実行
      var ul=$(this).children('ul');
        if(ul.css("display") === "none"){ //開いているメニューを閉じないように
//          console.log(ul.css("display"));
  //        var lia=$(this).children('a');

        //console.log(menuWidth);
        //console.log(ul);

  //        closeAll(); // 全て閉じ
  //        open(ul); // クリックされたものを開く
  //      g_allul.hide();
        g_allul.slideUp();
  //      ul.show();
        ul.slideDown(); //ゆっくり開くように
      }
    };
  });




  //メニューボタン
      slideButton.click(function(){
          slideOpen();
      });
      layer.click(function(){
          slideClose();
      });
      closeArea.click(function(){
          slideClose();
      });
      function slideOpen(){
          //menu.animate({'right' : 0 }, 300);
          menu.animate({'left' : 0 }, 300);
          layer.show();
          content.addClass('open');
      }
      function slideClose(){
          //menu.animate({'right' : -menuWidth }, 300);
          var menuWidth = menu.outerWidth();
          menu.animate({'left' : -menuWidth }, 300);
          layer.hide();
          content.removeClass('open');
          g_allul.hide();
          //console.log(g_allul);
      };






    $(window).resize(function(){
//        var win = $(window).width();
//        var p = 980;//１
        var menuWidth = menu.outerWidth();
//        console.log(win);
        //console.log(menuWidth);

        if(menuWidth < 500){
          menu.animate({'left' : -menuWidth }, 300);
          layer.hide();

          $('a.disable').each(function(){       //a要素を無効にする
            $(this).removeAttr('href');
            $(this).removeAttr('target');
  //          $(this).attr('href','#');
  //          $(this).attr('target','_self');
            //console.log(menuWidth);
          });
        }else{
          menu.animate({'left' : 0 }, 300);
          g_allul.hide();
          //console.log(g_allul);

        }
    });


    //<!-- ドロップダウンメニュー		-->
      $(".menu_f02 > li").hover(function() {
        var menuWidth = menu.outerWidth();
        var ul=$(this).children('ul');
        //console.log(ul);
   //  menuWidthが、500以上のときに実行
          if(menuWidth>500){
          ul.stop(true).slideDown('fast');
        };
      }, function() {   //マウスが外れたとき
        var menuWidth = menu.outerWidth();
        var ul=$(this).children('ul');
        //console.log(menuWidth);
   //  menuWidthが、500以下のときに実行
          if(menuWidth>500){
          ul.slideUp('fast');
        };
      });



//<!-- トップへ戻るボタン-->
    var pagetop = $('.pagetop');
    //  スクロールが十分されたらpagetopを表示、スクロールが戻ったら非表示
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {		//<!--エラーがあるが問題なし -->100pxスクロールで表示
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
        }
    });
    //  pagetopがクリックされたら上に戻る
    pagetop.click(function () {
         $('body, html').animate({ scrollTop: 0 }, 500);  //画面上部まで、0.5sで戻る
            return false;
    });

//    <!-- Google アナリティクス-->
    //    <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-79658372-1', 'auto');
          ga('send', 'pageview');

    //    </script>


	//	現在のページへのリンクにクラス（nowthis）追加
	//	リンクはhttpからのフルパスで書くように
     var url = window.location;
        $('.menu_f02 a[href="'+url+'"]').addClass('nowthis');



}); //$(document) close
