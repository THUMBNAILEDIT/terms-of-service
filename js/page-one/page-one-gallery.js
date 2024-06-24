import { galleryItems } from "./page-one-images.js";

const galleryContainer = document.querySelector(".page-one__gallery__list");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(items) {
  const markup = items.map(({ preview, original, description }) => {
    return `
    
    <a class="page-one__gallery-image__full" href="${original}">
    <img class="page-one__gallery-image__preview" src="${preview}" alt="${description}" />
  </a> `;
  });

  return markup.join("");
}

function installSimpleLightbox() {
  let lightbox = new SimpleLightbox(
    ".page-one__gallery__list .page-one__gallery-image__full",
    {
      captionsData: "alt",
      captionDelay: 250,
    }
  );
}

installSimpleLightbox();
