// import BooksApiService from './api.js';
import axios from 'axios';

document.addEventListener(`DOMContentLoaded`, init);

const openBtn = document.querySelector(`.open-popup`);
const popup = document.querySelector(`.popup`);
const closeBtn = document.querySelector(`.popup__close`);
const bookInfo = document.querySelector(`.book`);

// export default
function init() {
  openBtn.addEventListener(`click`, () => {
    class BooksApiService {
      static URL = 'https://books-backend.p.goit.global/books/';
      async getInfoAboutBook(bookId) {
        const url = `${BooksApiService.URL}${bookId}`;
        const data = await axios.get(url);
        return data;
        console.log(JSON.parse(data));

        function getBookCard() {
          return `<div class="popup__flex book-info book">
            <img
              class="book__img"
              src="${data.book_image}"
              alt="."
            />
            <div class="book-info__flex">
              <h4 class="book__title">${data.list_name}</h4>
              <p class="book__author">${data.author}</p>
              <p class="book__description">
                ${data.description}
              </p>
              <div class="trading-platform-icons">Miejsce na ikonki</div>
            </div>
          </div>`;
        }
        bookInfo.innerHTML = getBookCard();
      }
    }
    popup.style.display = `block`;
  });
  closeBtn.addEventListener(`click`, () => {
    popup.style.display = `none`;
  });
  document.addEventListener(`keydown`, event => {
    if (event.key === `Escape`) {
      popup.style.display = `none`;
    }
  });
  window.addEventListener(`click`, event => {
    if (event.target == popup) {
      popup.style.display = `none`;
    }
  });
}

// class BooksApiService {
//   static URL = 'https://books-backend.p.goit.global/books/';
//   async getInfoAboutBook(bookId) {
//     const url = `${BooksApiService.URL}${bookId}`;
//     const data = await axios.get(url);
//     return data;

//     function getBookCard() {
//       return `<div class="popup__flex book-info book">
//             <img
//               class="book__img"
//               src="${data.book_image}"
//               alt="."
//             />
//             <div class="book-info__flex">
//               <h4 class="book__title">${data.list_name}</h4>
//               <p class="book__author">${data.author}</p>
//               <p class="book__description">
//                 ${data.description}
//               </p>
//               <div class="trading-platform-icons">Miejsce na ikonki</div>
//             </div>
//           </div>`;
//     }
//     bookInfo.innerHTML = getBookCard();
//   }
// }
