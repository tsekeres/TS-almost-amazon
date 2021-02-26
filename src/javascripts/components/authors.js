// FIXME: STUDENTS show your authors

const showAuthors = (array) => {
  document.querySelector('#store').innerHTML = '';
  // CREATE A BUTTON TO ADD BOOKS

  array.forEach((item) => {
    // FIXME: STUDENTS create cards for your authors
    document.querySelector('#store').innerHTML += `<div class="card">
                            <div class="card-body d-flex flex-column align-items-lg-center" style="height: 100px;">
                            <h5 class="card-title">${item.last_name}, ${item.first_name}</h5>
                            <p class="card-text">${item.email}</p>
                            </div>
                          </div>`;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
