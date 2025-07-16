// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import icon from '../img/check-icon-snackbar.svg';


const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then((delay) => {
      iziToast.success({
        title: '',
        titleColor: '#fff',
        icon: '',
        iconUrl: icon,
        message: `Fulfilled promise in ${delay}ms`,
        messageColor: '#fff',
        position: 'topRight',
        backgroundColor: '#59a10d',
        close: true,
        theme: 'dark',
        
        
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: '❌',
        titleColor: '#fff',
        icon: '',
        message: `Rejected promise in ${delay}ms`,
        messageColor: '#fff',
        position: 'topRight',
        backgroundColor: ' #ef4040',
        close: true,
        theme: 'dark',
      });
    });
});