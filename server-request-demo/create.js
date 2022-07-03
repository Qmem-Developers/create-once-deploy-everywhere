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

  FB.api(
    `/${instagramId}/media`,
    'POST',
    {
      media_type: 'CAROUSEL',
      caption: document.getElementById('igDescription').value,
      children: imageArr,
    },
    function (response) {
      console.log(response);
      document.getElementById(
        'containerCreationResponse'
      ).innerHTML += `<li>${JSON.stringify(response)} </li>\n`;
    }
  );
}

function postToInsta() {
  var containerId = document.getElementById('imgContainerId').value;

  FB.api(
    `/${instagramId}/media_publish`,
    'POST',
    { creation_id: containerId },
    function (response) {
      console.log(response);
      document.getElementById(
        'instagramPublishResponse'
      ).innerHTML += `<li>instagram - ${JSON.stringify(response)} </li>\n`;
    }
  );
}
