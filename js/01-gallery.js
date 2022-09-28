import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery"); //2. Стучимся к классу, для доступа к сл. этапу
gallery.insertAdjacentHTML("beforeend", createGallaryMarkup(galleryItems)); //3. рендерим готовую разметку в dom


// 1. начало создания разметки
function createGallaryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
 
    </a>
    </div>
    `;
    })
    .join("");
}


gallery.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
		return
	}

    const selectedImage = event.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)

    instance.show()
    
    gallery.addEventListener('keydown', event => {
		if (event.key === 'Escape') {
			instance.close()
		}
	})
})