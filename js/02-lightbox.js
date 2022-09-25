import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector(".gallery"); //2. Стучимся к классу, для доступа к сл. этапу
gallery.insertAdjacentHTML("beforeend", createGallaryMarkup(galleryItems)); //3. рендерим готовую разметку в dom


// 1. начало создания разметки
function createGallaryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>
    `;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionsData: "alt",
    captionDelay: 250,
// close: false, не показывать кнопку "закрыть"
});
