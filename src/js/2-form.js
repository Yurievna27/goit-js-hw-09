const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const textareaMsg = document.querySelector('[name="message"]');

const formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email;
  formData.message = parsedData.message;

  emailInput.value = formData.email;
  textareaMsg.value = formData.message;
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
