// FIXME: STUDENTS show your authors

const showAuthors = (array) => {
  // CREATE A BUTTON TO ADD AUTHORS
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    // FIXME: STUDENTS create cards for your authors
    document.querySelector('#store').innerHTML += `<div class='card'>
                            <div class='card-body d-flex flex-column align-items-lg-center' style='height: 100px;'>
                            <h5 class='card-title'>${item.last_name}, ${item.first_name}</h5>
                            <p class='card-text'>${item.email}</p>
                            </div>
                          </div>`;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
