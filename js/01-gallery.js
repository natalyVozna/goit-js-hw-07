import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryContainerEl = document.querySelector(".gallery");
let instance;

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
               <a class="gallery__link" href="${original}" >
                 <img
                   class="gallery__image"
                   src="${preview}"
                   data-source="${original}"
                   alt="${description}"
                 />
               </a>
             </div>`;
    })
    .join("");
}

const gallerysMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainerEl.insertAdjacentHTML("beforeend", gallerysMarkup);

galleryContainerEl.addEventListener("click", onOpenModal);

function onOpenModal(e) {
  e.preventDefault();
  console.log(e.target.nodeName);
  if (e.target.nodeName === "IMG") {
    instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" /> `);

    instance.show();
  }

  window.addEventListener("keydown", (e) => {
    const ESC_KEY_CODE = "Escape";
    if (e.code === ESC_KEY_CODE) {
      instance.close();
    }
  });
}
