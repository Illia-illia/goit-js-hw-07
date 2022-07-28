import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryListEl = document.querySelector('.gallery');
galleryListEl.addEventListener('click', modalWindow);

function createMarkUp(array) {
  return array
    .map(
      ({ preview, original, description }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>`
    )
    .join('');
}
galleryListEl.innerHTML = createMarkUp(galleryItems);

function modalWindow(e) {
  e.preventDefault();
}
const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
});

console.log(lightbox.options);
