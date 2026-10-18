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
  formData.email = emailInput.value.trim();
  formData.message = textareaMsg.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');

    formData.email = '';
    formData.message = '';
    form.reset();
  }
});
