import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const galleryRenderMarkup = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryRenderMarkup);

galleryEl.addEventListener('click', getLargeImg);

function createGalleryMarkup(data) {
  return data
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join('');
}

function getLargeImg(e) {
  e.preventDefault();
  console.log(e.target);
}

const testTamplate = () =>
  `<div class="modal">
    <p>AAAAAAAAAAAAAAAAAAAAAAAAA</p>
  </div>`;

const instance = basicLightbox.create(testTamplate());
instance.show();
