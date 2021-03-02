import signOut from '../helpers/auth/signOut';
import { getAuthors, getFaveAuthors } from '../helpers/data/authorData';
import { showAuthors } from '../components/authors';
import { getBooks, getSaleBooks } from '../helpers/data/bookData';
import { showBooks } from '../components/books';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    getSaleBooks().then((saleBooksArray) => showBooks(saleBooksArray));
  });

  // ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks().then((booksArray) => showBooks(booksArray));
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
  document.querySelector('#authors').addEventListener('click', () => getAuthors().then((authors) => showAuthors(authors)));

  // GET FAVORITE AUTHORS
  document.querySelector('#fave-authors').addEventListener('click', () => {
    getFaveAuthors().then((faveAuthorsArray) => showAuthors(faveAuthorsArray));
  });
};

export default navigationEvents;
