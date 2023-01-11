import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector('.gallery')
const galleryMarkup = createGallery(galleryItems)

galleryEl.insertAdjacentHTML ('beforeend', galleryMarkup)



function createGallery(galleryItems){
    return galleryItems.map(({preview, original,description})=>
    {
        return `
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
        `
    }).join('')
}

function onImgClick(event){
  event.preventDefault()}

const lightbox = new SimpleLightbox('.gallery a', {captions: true, captionsData: 'alt' , captionDelay: 250 });
















// let lightbox = null;
// function onImgClick(event){
//     event.preventDefault()
    
//     if (event.target.nodeName !=="IMG"){
//         return
//     }

//     const element =event.target.dataset.source;
//     lightbox = basicLightbox.create(
//         `img width="1400" height="900" src="${element}">`
//     )

// lightbox.show();
// window.addEventListener('keydown', onEscapeClick)
// }

// function onEscapeClick(event){
//     console.log(event);
//     if (event.code !== 'Escape'){
//         lightbox.close()
//     }
    
// }

// galleryEl.addEventListener('click', onImgClick)
// console.log(galleryItems);