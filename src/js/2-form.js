const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.email-input');
const textareaMsg = document.querySelector('.textarea-message');

const formState = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const formData = JSON.parse(savedData);
  formState.email = formData.email;
  formState.message = formData.message;

  emailInput.value = formState.email;
  textareaMsg.value = formState.message;
}

form.addEventListener('input', () => {
  formState.email = emailInput.value.trim();
  formState.message = textareaMsg.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!formState.email || !formState.message) {
    alert('Fill please all fields');
  } else {
    console.log(formState);
    localStorage.removeItem('feedback-form-state');

    formState.email = '';
    formState.message = '';
    form.reset();
  }
});
