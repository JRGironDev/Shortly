const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

const input = document.getElementById('link-input');
const linkform = document.getElementById('link-form');
const errMsn = document.getElementById('err-msg');

btn.addEventListener('click', navToggle);
linkform.addEventListener('submit', formSubmit);

// Toggle Menu menu
function navToggle() {
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}

// Validate a URL
function isURL(str) {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

function formSubmit(e) {
    e.preventDefault();
    
    if(input.value === '') {
        errMsn.innerHTML= 'Please add a link';
        input.classList.add('border-red');
    } else if (!isURL(input.value)) {
        errMsn.innerHTML= 'Please add a valid link';
        input.classList.add('border-red');
    } else {
        errMsn.innerHTML = '';
        input.classList.remove('border-red');
        alert('Link added successfully');
    }
}
