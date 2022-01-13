let elOpenModalBtn = document.getElementById('modalBtn');
let elCloseModalBtn = document.getElementById('closeModal');
let elModalBox = document.getElementById('modalOpen');

elOpenModalBtn.addEventListener('click', function() {
    elModalBox.classList.add('show');
})

elCloseModalBtn.addEventListener('click', function() {
    elModalBox.classList.remove('show');
})