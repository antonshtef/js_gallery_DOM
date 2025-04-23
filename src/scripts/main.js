'use strict';

const largeImage = document.getElementById('largeImg');

const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link').href;

  if (link !== null) {
    largeImage.src = link;
  }

  console.log(link)

});
