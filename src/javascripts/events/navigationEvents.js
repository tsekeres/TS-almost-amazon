import signOut from '../helpers/auth/signOut';
import { getAuthors, getFaveAuthors } from '../helpers/data/authorData';
import { emptyAuthors, showAuthors } from '../components/authors';
import { getBooks, getSaleBooks } from '../helpers/data/bookData';
import { emptyBooks, showBooks } from '../components/books';

// navigation events
const navigationEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    getSaleBooks(uid).then((saleBooksArray) => {
      if (saleBooksArray.length) {
        showBooks(saleBooksArray);
      } else {
        emptyBooks();
      }
    });
  });

  // ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks(uid).then((booksArray) => {
      if (booksArray.length) {
        showBooks(booksArray);
      } else {
        emptyBooks();
      }
    });
  });

  // SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  });

  // ALL AUTHORS
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors(uid).then((authorsArray) => showAuthors(authorsArray));
  });

  // GET FAVORITE AUTHORS
  document.querySelector('#fave-authors').addEventListener('click', () => {
    getFaveAuthors(uid).then((authorsArray) => {
      if (authorsArray.length) {
        showAuthors(authorsArray);
      } else {
        emptyAuthors();
      }
    });
  });
};

export default navigationEvents;
