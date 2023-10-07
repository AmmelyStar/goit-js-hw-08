// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

// console.log(galleryItems);





// Change code below this line

const list = document.querySelector('.gallery');


const markup = galleryItems
    .map(({ preview, original, description }) => {
          
        return `
        <li class = "gallery__item"> 
          <a class = "gallery__link" href="${original}">
         <img class="gallery__image"
      src="${preview}"
      alt="${description}"/>
      </a>
      </li>`;  
       
    }).join('');
   
list.insertAdjacentHTML('afterbegin', markup);
console.log(list);

const lightbox = new SimpleLightbox('.gallery a', { captionPosition: 'bottom', captionsData: 'alt', captionDelay: 250 });
