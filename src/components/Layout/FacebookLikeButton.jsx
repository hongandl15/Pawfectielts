import React, { useEffect } from 'react';

function FacebookLikeButton() {
  useEffect(() => {
    // Load the Facebook JavaScript SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0&appId=YOUR_APP_ID';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <div>
      {/* Your Like Button code */}
      <div
        data-href="https://your-website-url.com"
        data-layout="button_count"
        data-action="like"
        data-size="large"
        data-show-faces="false"
        data-share="false"
      ></div>
    </div>
  );
}

export default FacebookLikeButton;
