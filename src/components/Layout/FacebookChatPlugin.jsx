/* global FB */

import React, { useEffect } from 'react';

function FacebookChatPlugin() {
  useEffect(() => {
    // Your JavaScript code for the Facebook Chat Plugin here
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "123345934194886");
    chatbox.setAttribute("attribution", "biz_inbox");

    window.fbAsyncInit = function() {
      FB.init({
        xfbml: true,
        version: 'v17.0'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <div>
      {/* Your Chat plugin code */}
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  );
}

export default FacebookChatPlugin;
