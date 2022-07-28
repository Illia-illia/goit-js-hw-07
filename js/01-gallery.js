import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = createGalleryMarkup(galleryItems);

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
  // const modalImg = e.target.closest('.gallery__link').href;
  const modalImg = e.target.dataset.source;
  const instance = basicLightbox.create(testTamplate(modalImg));
  instance.show(modalImg);
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      instance.close();
    }
  });
}

const testTamplate = link =>
  `<div class="modal">
    <img src ="${link}" alt ="original"/>
  </div>`;
