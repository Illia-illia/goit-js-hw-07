import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryListEl = document.querySelector('.gallery');

function createMarkUp(obj) {
  return obj
    .map(
      ({ preview, original, description }) => `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
    )
    .join('');
}
galleryListEl.innerHTML = createMarkUp(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
