import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

// API CALLS FOR AUTHORS
const dbUrl = firebaseConfig.databaseURL;

// GET AUTHORS
const getAuthors = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/authors.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        const authorArray = Object.values(response.data);
        resolve(authorArray);
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

// DELETE AUTHOR
const deleteAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/authors/${firebaseKey}.json`)
    .then(() => getAuthors().then((authorsArray) => resolve(authorsArray)))
    .catch((error) => reject(error));
});

// GET FAVORITE AUTHOR
const getFaveAuthors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json?orderBy="favorite"&equalTo=true`)
    .then((response) => {
      const faveAuthorsArray = Object.values(response.data);
      resolve(faveAuthorsArray);
    }).catch((error) => reject(error));
});

// CREATE AUTHOR
const createAuthor = (authorObject, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/authors.json`, authorObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/authors/${response.data.name}.json`, body)
        .then(() => {
          getAuthors(uid).then((authorsArray) => resolve(authorsArray));
        });
    }).catch((error) => reject(error));
});

// GET SINGLE AUTHOR
const getSingleAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// UPDATE AUTHOR
const editAuthor = (firebaseKey, authorObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/authors/${firebaseKey}.json`, authorObject)
    .then(() => getAuthors(firebase.auth().currentUser.uid))
    .then((authorsArray) => resolve(authorsArray))
    .catch((error) => reject(error));
});
// SEARCH AUTHORS
export {
  getAuthors,
  createAuthor,
  deleteAuthor,
  getFaveAuthors,
  editAuthor,
  getSingleAuthor,
};
