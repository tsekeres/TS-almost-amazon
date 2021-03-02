const addAuthorForm = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id='submit-author-form' class='mb-4'>
      <div class='form-group'>
        <label for='first_name'>First Name</label>
        <input type='text' class='form-control' id='first-name' aria-describedby='first_name' placeholder='Enter Author first name' required>
      </div>
      <div class='form-group'>
        <label for='last_name'>Last Name</label>
        <input type='text' class='form-control' id='last-name' aria-describedby='last_name' placeholder='Enter Author last name' required>
      </div>
      <div class='form-group'>
        <label for='email'>Author Email</label>
        <input type='email' class='form-control' id='email' placeholder='Author Email' required>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="fave">
        <label class="form-check-label" for="fave">Favorite?</label>
      </div>
      <button type='submit' id='submit-author' class='btn btn-primary'>Submit Author</button>
    </form>`;
};

export default addAuthorForm;
