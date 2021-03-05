import selectAuthor from './selectAuthor';

const editAuthorForm = (authorObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id='edit-author-form' class='mb-4'>
      <div class='form-group'>
        <label for='first_name'>First Name</label>
        <input type='text' class='form-control' id='first-name' aria-describedby='first_name' placeholder='Enter Author first name' value="${authorObject.first_name}" required>
      </div>
      <div class='form-group'>
        <label for='last_name'>Last Name</label>
        <input type='text' class='form-control' id='last-name' aria-describedby='last_name' placeholder='Enter Author last name' value="${authorObject.last_name}" required>
      </div>
      <div class='form-group'>
        <label for='email'>Author Email</label>
        <input type='email' class='form-control' id='email' placeholder='Author Email' value="${authorObject.email}"required>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="fave" ${authorObject.favorite && 'checked'}>
        <label class="form-check-label" for="fave">Favorite?</label>
      </div>
      <button type="submit" id="update-author--${authorObject.firebaseKey}" class="btn btn-primary">Submit Author</button>
    </form>`;

  selectAuthor(authorObject);
};

export default editAuthorForm;
