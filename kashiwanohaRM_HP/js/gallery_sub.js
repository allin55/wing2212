
//下部のページから利用するときに使用

//ページ読み込み完了後、実施するように
$(document).ready(function() {

   // <!-- ギャラリー開始-->

//   <script type="text/javascript">
     // テーマを読み込み（削除禁止）
     Galleria.loadTheme( '../js/galleria/themes/classic/galleria.classic.min.js');
     //写真集ではアドレス注意

     // オプション
     option = {
       //width:  950,					// 幅（削除禁止）
       //height: 630,					// 高さ（削除禁止）

       height: 0.62,					//レスポンシブ設定、横１に対する高さ

       autoplay: 3000,					// 表示させる時間
       carousel: true,					// スライドインの有無（trueで有効）
       imageCrop: false,				// 画像のクロップ有無（trueでトリキリ）
       _toggleInfo: false,				// キャプションの表示（falseでキャプション表示）

       lightbox: true,					// LIGHTBOXの有無
       lightboxFadeSpeed: 600,			// LIGHTBOXのフェードの速さ
       lightboxTransitionSpeed: 600	// LIGHTBOXの表示の速さ
     }

     // ギャラリー作成（削除禁止）
     Galleria.run( '#gallery', option);	// ギャラリーにする部分のID指定
  // </script>
  // <!-- ギャラリー終了-->


}); //$(document) close
//</script>
