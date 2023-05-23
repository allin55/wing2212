
//ページ読み込み完了後、実施するように
$(document).ready(function() {



//<!-- トップへ戻るボタン-->
//<script type="text/javascript">
    var pagetop = $('.pagetop');
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {		//<!--エラーがあるが問題なし -->
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
            }
    });
    pagetop.click(function () {
         $('body, html').animate({ scrollTop: 0 }, 500);  //画面上部まで、0.5sで戻る
            return false;
    });


//    <!-- Google アナリティクス-->
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-79658372-1', 'auto');
      ga('send', 'pageview');


//	現在のページへのリンクにクラス（active）追加
//	リンクはhttpからのフルパスで書くように
   var url = window.location;
   $('.nav a[href="'+url+'"]').parent().addClass('active');
  //  $('.nav a[href="'+url+'"]').addClass('active');

// pdfファイルに、icon追加。テストのみ
//   if ($("title").text() != "歴代記録｜柏の葉リレーマラソン") {
//     $('a[target="_blank"]').addClass('glyphicon glyphicon-new-window');
//   }
// 　console.log($("title").text());
//
//   var cba = $("a").parent();
//   console.log(cba);
//   $.each(cba,function() {
//     if ($(this).hasClass('banner')) {
//       console.log($(this));
//     } else {
//       console.log($(this));
//       $(this > 'a[target="_blank"]').addClass('glyphicon glyphicon-new-window');
//     }
//   });


}); //$(document) close
