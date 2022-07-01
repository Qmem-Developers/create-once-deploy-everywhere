var access_token;
var appId = '1183338462463993';
var appVersion = 'v14.0';
var user_access_token =
  'EAAQ0PXS0RZCkBANA0RVDSE7q0Vd4SrADLNNLZAyNdrtWVkQ32G38zU59szYstuYxOTaEQKt9lYO6k1nt40WpZAC4P8jriDlPsiXd5xfbmZATbd2eJZB2A43Xi6dpYPsHHZC6v8sjxHlbvSwUm90HjEJ2usDfkbjTbpsgxXStiPqkFRACvkEeWj85zw7ji8h7ivs4DBwR75Pk1X8ld07Gb5ZC0LlPYUkFdlXQlGZBAHMgU3ZCk7GkcyjrN';
var page_access_token =
  'EAAQ0PXS0RZCkBAGleIVYmpKoBjNsDoTtCxlspgrwaL6C9BcYrg3vcc2sjEPEiM1IcnBcx2EhegtWoxhb4I21PpvxffdYpBTslOmZB0SfPZBnpyd8QWWRAgFmVsQLBnZCySCIeVHwIXU7swNZAhmOEHrIYW17u97hdhYFSLT7jUZA0Hpu503F0j6002TcoBOp7kjPY7bAF8gbObdh7A8ZCHx';
var pageId = '100204642759429';
var instagramId = '17841452089021486';

function statusChangeCallback(response) {
  // Called with the results from FB.getLoginStatus().
  console.log('statusChangeCallback');
  console.log(response); // The current login status of the person.
  if (response.status === 'connected') {
    // Logged into your webpage and Facebook.
    testAPI();
    access_token = response.authResponse.accessToken;
    console.log('access token ', access_token);
    // console.log(access_token)
  } else {
    // Not logged into your webpage or we are unable to tell.
    document.getElementById('status').innerHTML =
      'Please log ' + 'into this webpage.';
  }
}

function checkLoginState() {
  // Called when a person is finished with the Login Button.
  FB.getLoginStatus(function (response) {
    // See the onlogin handler
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function () {
  FB.init({
    appId: appId,
    cookie: true, // Enable cookies to allow the server to access the session.
    xfbml: true, // Parse social plugins on this webpage.
    version: appVersion, // Use this Graph API version for this call.
  });

  FB.getLoginStatus(function (response) {
    // Called after the JS SDK has been initialized.
    statusChangeCallback(response); // Returns the login status.
    console.log('getLoginStatus-Response', response);
  });
};

function testAPI() {
  // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function (response) {
    // console.log("resp",response)
    // console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';
  });
}

function postToFbPage() {
  var doc = document.getElementById('facebookImages');
  var imgArr = doc.getElementsByClassName('images_url');
  var ImageDataArray = [];

  //make array of images to be uploaded
  if (imgArr.length == 1) {
    for (i = 0; i < imgArr.length; i++) {
      console.log('1' + imgArr[i]);
      ImageDataArray.push({
        media_fbid: `${imgArr[i].value}`,
        message: `${document.getElementById('description').value}`,
      });
    }

    FB.api(
      `/${pageId}/feed`,
      'POST',
      {
        attached_media: ImageDataArray,
        access_token: `${page_access_token}`,
      },

      function (response) {
        console.log(response);
        document.getElementById(
          'facebookPublishResponse'
        ).innerHTML += `<li>page - ${JSON.stringify(response)} </li>\n`;
      }
    );
  } else {
    for (i = 0; i < imgArr.length; i++) {
      console.log('1' + imgArr[i]);
      ImageDataArray.push({
        media_fbid: `${imgArr[i].value}`,
      });
    }

    FB.api(
      `/${pageId}/feed`,
      'POST',
      {
        message: `${document.getElementById('description').value}`,
        attached_media: ImageDataArray,
        access_token: `${page_access_token}`,
      },

      function (response) {
        console.log(response);
        document.getElementById(
          'facebookPublishResponse'
        ).innerHTML += `<li>page - ${JSON.stringify(response)} </li>\n`;
      }
    );
  }
}

function uploadImages() {
  var imageArr = [];
  var doc = document.getElementById('imageInput');
  var images = doc.getElementsByClassName('images_url');

  for (i = 0; i < images.length; i++) {
    imageArr.push(images[i].value);
  }

  imageArr.forEach((imageurl) => {
    //uploading to facebook
    FB.api(
      `/${pageId}/photos`,
      'POST',
      {
        url: imageurl,
        published: 'false',
        access_token: `${page_access_token}`,
      },
      function (response) {
        console.log(response);

        document.getElementById(
          'uploadedFacebookImageId'
        ).innerHTML += `<li>${JSON.stringify(response)} </li>\n`;
      }
    );

    //uploading to instagram

    FB.api(
      `/${instagramId}/media`,
      'POST',
      {
        image_url: imageurl,
        is_carousel_item: 'true',
        access_token: `${user_access_token}`,
      },
      function (response) {
        console.log(response);
        document.getElementById(
          'uploadedInstagramImageId'
        ).innerHTML += `<li>${JSON.stringify(response)} </li>\n`;
      }
    );
  });
}

function createImageContainer() {
  var imageArr = [];
  var doc = document.getElementById('igImagesContainer');
  var images = doc.getElementsByClassName('images_url');

  for (i = 0; i < images.length; i++) {
    imageArr.push(images[i].value);
  }

  // imageArr.forEach((imageurl) => {
  //   //create container
  // });

  FB.api(
    `/${instagramId}/media`,
    'POST',
    { media_type: 'CAROUSEL', children: imageArr },
    function (response) {
      console.log(response)
      document.getElementById(
        'containerCreationResponse'
      ).innerHTML += `<li>${JSON.stringify(response)} </li>\n`;
      
      // Insert your code here
    }
  );
}

function postToInsta(){

  var containerId = document.getElementById('imgContainerId').value

  FB.api(
    `/${instagramId}/media_publish`,
    'POST',
    {"creation_id":containerId},
    function(response) {
      console.log(response)
      document.getElementById(
        'instagramPublishResponse'
      ).innerHTML += `<li>instagram - ${JSON.stringify(response)} </li>\n`;
      
        // Insert your code here
    }
  );
}