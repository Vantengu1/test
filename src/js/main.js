// src/js/login.js
document.addEventListener('DOMContentLoaded', () => {
    const pwd = document.getElementById('password');
    const btn = document.querySelector('.eye-btn');
    if (!pwd || !btn) return;

    const iconOpen = btn.querySelector('.icon-eye');
    const iconOff  = btn.querySelector('.icon-eye-off');

    btn.addEventListener('click', () => {
        const visible = pwd.type === 'text';
        pwd.type = visible ? 'password' : 'text';
        btn.setAttribute('aria-pressed', String(!visible));
      // переключаем иконки
    if (iconOpen && iconOff) {
        iconOpen.style.display = visible ? 'block' : 'none';
        iconOff.style.display  = visible ? 'none'  : 'block';
    }
      // обновим подпись для SR
        btn.setAttribute('aria-label', visible ? 'Показать пароль' : 'Скрыть пароль');
    });
});
