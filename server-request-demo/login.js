function login() {
  //initializing
  FB.init({
    appId: appId,
    cookie: true, // Enable cookies to allow the server to access the session.
    xfbml: true, // Parse social plugins on this webpage.
    version: appVersion, // Use this Graph API version for this call.
  });

  //login request for the  popup
  FB.login(
    function (response) {
      document.getElementById(
        'loginResponse'
      ).innerHTML += `<li>login response ${JSON.stringify(response)}</li>`;

      // if (response.authResponse) {
      //   console.log('Welcome!  Fetching your information.... ');
      //   FB.api('/me/permissions', function (response) {
      //     document.getElementById('loginResponse').innerHTML +=
      //       '\n\npermissions '+JSON.stringify(response);
      //     console.log('Good to see you, ' + response.name + '.');
      //   });

      // } else {
      //   console.log('User cancelled login or did not fully authorize.');
      // }
    },
    {
      scope: `
        email,
        public_profile,
        read_insights,
        business_management,
        attribution_read,

        pages_messaging,
        pages_show_list,
        pages_read_engagement,
        pages_manage_metadata,
        pages_read_user_content,
        pages_manage_posts,
        pages_manage_engagement,

        instagram_basic,
        instagram_manage_comments,
        instagram_manage_insights,
        instagram_content_publish,
        `,
    }
  );
}

function checkPermissions() {
  FB.api('/me/permissions', function (response) {
    document.getElementById(
      'loginResponse'
    ).innerHTML += `<li>permissions ${JSON.stringify(response)}</li>`;
    console.log('Good to see you, ' + response.name + '.');
  });
}

function unauthorized() {
  FB.api('/me/permissions', 'DELETE', function (response) {
    document.getElementById(
      'loginResponse'
    ).innerHTML += `<li>delete permissions ${JSON.stringify(response)}</li>`;
    console.log('Good to see you, ' + response.name + '.');
  });
}

function checkAccounts() {
  FB.api('/me/accounts', function (response) {
    document.getElementById(
      'loginResponse'
    ).innerHTML += `<li>accounts ${JSON.stringify(response)}</li>`;
    console.log('accounts, ' + response.name + '.');
  });
}

function setValues() {
  pageId = document.getElementById('pageIdInput').value;
  accessToken = document.getElementById('userAccessToken').value;
  page_access_token = document.getElementById('pageAccessTokenInput').value;
  user_access_token = document.getElementById('userAccessToken').value;

  document.getElementById(
    'loginResponse'
  ).innerHTML += `<li>pageId ${pageId} </li>`;
  document.getElementById(
    'loginResponse'
  ).innerHTML += `<li>user_access_token ${user_access_token} </li>`;
  document.getElementById(
    'loginResponse'
  ).innerHTML += `<li>page_access_token ${page_access_token} </li>`;
}

function setInstagramId() {
  instagramId = document.getElementById('instagramIdInput').value;
}

function getInstagramId() {
  FB.api(
    `/${pageId}`,
    'GET',
    {
      fields: 'connected_instagram_account',
      //   access_token: `${page_access_token}`,
    },
    function (response) {
      document.getElementById(
        'loginResponse'
      ).innerHTML += `<li>instagram ${JSON.stringify(response)}</li>`;
      console.log('instagram, ' + response.name + '.');
    }
  );
}

// FB.api(
//     '/100204642759429',
//     'GET',
//     {"fields":"connected_instagram_account"},
//     function(response) {
//         // Insert your code here
//     }
//   );
