import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryContainerEl = document.querySelector(".gallery");

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
               <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
             </div>`;
    })
    .join("");
}

const gallerysMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainerEl.insertAdjacentHTML("beforeend", gallerysMarkup);

let gallery = new SimpleLightbox(".gallery a");

gallery.on("show.simplelightbox", function (e) {
  e.captionSelector = e.target.querySelector(".gallery__image").alt;
  console.log(e.captionSelector, "botoom", e.target.captionPosition);
});

console.log(gallery.captionData);
