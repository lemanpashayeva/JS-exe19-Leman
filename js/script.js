const icon = document.getElementById('icon');
const input = document.getElementById('parol');

icon.addEventListener('click' , function() {
    input.type='text';
    this.className='fa-solid fa-eye-slash';
});

icon.addEventListener('dblclick' , function() {
    input.type='password';
    this.className='fa-solid fa-eye';
});