 window.fbAsyncInit = function () {
     FB.init({
         appId: '1383815025265074',
         xfbml: true,
         version: 'v2.2'
     });
 };

 (function (d, s, id) {
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {
         return;
     }
     js = d.createElement(s);
     js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));


 (function () {
     var _fbq = window._fbq || (window._fbq = []);
     if (!_fbq.loaded) {
         var fbds = document.createElement('script');
         fbds.async = true;
         fbds.src = '//connect.facebook.net/en_US/fbds.js';
         var s = document.getElementsByTagName('script')[0];
         s.parentNode.insertBefore(fbds, s);
         _fbq.loaded = true;
     }
 })();
 window._fbq = window._fbq || [];
 window._fbq.push(['track', '6023373374116', {
     'value': '0.00',
     'currency': 'TRY'
        }]);