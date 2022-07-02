//100204642759429_100963459350214

function editInFbPage(){

        var doc = document.getElementById('facebookImagesForEdit');
        var imgArr = doc.getElementsByClassName('image_urlEdit');
        var ImageDataArray = [];
      
        //make array of images to be uploaded
          for (i = 0; i < imgArr.length; i++) {
            console.log(imgArr[i].value)
            ImageDataArray.push({
              media_fbid: `${imgArr[i].value}`,
              
            });
          }
          FB.api(
            `/${document.getElementById('facebookPostId').value}`,
            'POST',
            {
              attached_media: ImageDataArray,
              message: `${document.getElementById('descriptionEdit').value}`,
              access_token: `${page_access_token}`,
            },
      
            function (response) {
              console.log(response);
              document.getElementById(
                'facebookEditResponse'
              ).innerHTML += `<li>page - ${JSON.stringify(response)} </li>\n`;
            }
          );
        
      }

function editInInsta(){

}

function deleteFromFbPage(){
    FB.api(
        `/${document.getElementById('facebookPostIdforDelete').value}`,
        'DELETE',
        {
          access_token: `${page_access_token}`,
        },
  
        function (response) {
          console.log(response);
          document.getElementById(
            'facebookDeleteResponse'
          ).innerHTML += `<li>page - ${JSON.stringify(response)} </li>\n`;
        }
      );
}