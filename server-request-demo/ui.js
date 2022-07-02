function addImageField() {
  var fields = document.getElementsByClassName('imageField');

  for (i = 0; i < fields.length; i++) {
    fields[i].innerHTML += `
      <input type='text'  id='image_url' class='images_url'>`;
  }
}


function addImageFieldEdit(){
  var doc = document.getElementById('imageEditField')

  doc.innerHTML += `
       <input type='text'  id='image_url' class='image_urlEdit'>`;
 
}