
// function statusChangeCallback(response) {
//   // Called with the results from FB.getLoginStatus().
//   console.log('statusChangeCallback');
//   console.log(response); // The current login status of the person.
//   if (response.status === 'connected') {
//     // Logged into your webpage and Facebook.
//     testAPI();
//     accessToken = response.authResponse.accessToken;
//     // console.log('auth resp', response.authResponse)
//   } else {
//     // Not logged into your webpage or we are unable to tell.
//     document.getElementById('status').innerHTML =
//       'Please log ' + 'into this webpage.';
//   }
// }


// function checkLoginState() {
// // Called when a person is finished with the Login Button.
//   FB.getLoginStatus(function (response) {
//     // See the onlogin handler
//     statusChangeCallback(response);
//   });
// }


// window.fbAsyncInit = function () {
//   FB.init({
//     appId: appId,
//     cookie: true, // Enable cookies to allow the server to access the session.
//     xfbml: true, // Parse social plugins on this webpage.
//     version: appVersion, // Use this Graph API version for this call.
//   });

//   FB.getLoginStatus(function (response) {
//     // Called after the JS SDK has been initialized.
//     statusChangeCallback(response); // Returns the login status.
//   });
// };

// function testAPI() {
//   // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
//   // console.log('Welcome!  Fetching your information.... ');
//   FB.api('/me', function (response) {
//     userId = response.id
//     document.getElementById('status').innerHTML =
//       'Thanks for logging in, ' + response.name + '!';
 
//   });

// }










// permissions 
// {"data":[{"permission":"email","status":"granted"},
// {"permission":"read_insights","status":"granted"},
// {"permission":"pages_show_list","status":"granted"},
// {"permission":"business_management","status":"granted"},
// {"permission":"pages_messaging","status":"granted"},
// {"permission":"instagram_basic","status":"granted"},
// {"permission":"instagram_manage_comments","status":"granted"},
// {"permission":"instagram_manage_insights","status":"granted"},
// {"permission":"instagram_content_publish","status":"granted"},
// {"permission":"publish_to_groups","status":"granted"},
// {"permission":"groups_access_member_info","status":"granted"},
// {"permission":"attribution_read","status":"granted"},
// {"permission":"pages_read_engagement","status":"granted"},
// {"permission":"pages_manage_metadata","status":"granted"},
// {"permission":"pages_read_user_content","status":"granted"},
// {"permission":"pages_manage_posts","status":"granted"},
// {"permission":"pages_manage_engagement","status":"granted"},
// {"permission":"public_profile","status":"granted"}]}