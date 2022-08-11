const submit = document.querySelector('#submit'); 
const pword = document.querySelector('#pword');
const cpword = document.querySelector('#cpword');
const error = document.querySelector('.error');
submit.addEventListener('click', function() {
    if (pword !== cpword ){
        error.textContent = "Paswords should match";
    }
}); 