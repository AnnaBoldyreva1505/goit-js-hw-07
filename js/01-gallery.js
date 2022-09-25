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



// console.log(createGallaryMarkup(galleryItems));


// gallery.addEventListener("click", newVar)

// function newVar(event) = 
//  event.preventDefault(); //
// if (e.target.nodeName !== 'IMG') return;

