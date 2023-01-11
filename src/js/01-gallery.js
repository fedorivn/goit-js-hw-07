import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryEl = document.querySelector('.gallery')
const galleryMarkup = createGallery(galleryItems)

galleryEl.insertAdjacentHTML ('beforeend', galleryMarkup)



function createGallery(galleryItems){
    return galleryItems.map(({preview, original,description})=>
    {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
        </div>
        `
    }).join('')
}
console.log(createGallery(galleryItems))

let lightbox = null;

function onImgClick(event){
    event.preventDefault()
    
    if (event.target.nodeName !=="IMG"){
        return
    }

    const element = event.target.dataset.source;

    
    lightbox = basicLightbox.create(
        `<img width="800" height="600" src="${element}"/>`
    )

lightbox.show();
    }

galleryEl.addEventListener('click', onImgClick)


window.addEventListener('keydown', onEscapeClick)


function onEscapeClick(event){
    if (event.code === 'Escape'){
        lightbox.close()
    }
    
}
