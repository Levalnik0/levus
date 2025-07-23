// Модальные окна
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const openLogin = document.querySelectorAll('.btn-login');
const openRegister = document.getElementById('openRegister');
const closeModals = document.querySelectorAll('.close-modal');

// Открытие модалки входа
openLogin.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'flex';
    });
});

// Переключение на регистрацию
openRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'none';
    registerModal.style.display = 'flex';
});

// Закрытие модалок
closeModals.forEach(btn => {
    btn.addEventListener('click', () => {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
    });
});

// Валидация формы
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Добро пожаловать!');
    loginModal.style.display = 'none';
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Регистрация успешна!');
    registerModal.style.display = 'none';
});