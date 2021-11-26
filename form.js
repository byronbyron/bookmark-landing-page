const form = document.querySelector('#email-form');
const msg = document.querySelector('.form-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateEmail(event.target.email.value)) {
        event.target.email.setAttribute("aria-invalid", "true");
        msg.classList.remove('hidden');
    } else {
        event.target.email.setAttribute("aria-invalid", "false");
        msg.classList.add('hidden');
    }
})

function validateEmail(value) {
    var input = document.createElement('input');

    input.type = 'email';
    input.required = true;
    input.value = value;

    return typeof input.checkValidity === 'function'
        ? input.checkValidity()
        : /\S+@\S+\.\S+/.test(value);
}

