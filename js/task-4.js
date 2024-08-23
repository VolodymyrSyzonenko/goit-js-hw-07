// Отримуємо посилання на форму
const form = document.querySelector('.login-form');

// Додаємо обробник події submit на форму
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Відміна перезавантаження сторінки

  // Отримуємо значення полів форми
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  // Перевірка чи всі поля заповнені
  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }

  // Створення об'єкта з даними форми
  const formData = {
    email,
    password,
  };

  // Виведення даних в консоль
  console.log(formData);

  // Очищення форми
  form.reset();
});

