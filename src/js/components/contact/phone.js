import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
// import Inputmask from 'inputmask';

export const usePhone = () => {
  const input = document.querySelector('#phone');
  intlTelInput(input, {
    initialCountry: 'auto',
    strictMode: true,
    geoIpLookup: (callback) => {
      fetch('https://ipapi.co/json')
        .then((res) => res.json())
        .then((data) => callback(data.country_code))
        .catch(() => callback('us'));
    },
    utilsScript:
      'https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/utils.js',
  });
};
export const useValid = () => {
  document.getElementById('first-name').addEventListener('input', function () {
    this.value = this.value.replace(/[^A-Za-z]/g, '');
  });
  document.getElementById('last-name').addEventListener('input', function () {
    this.value = this.value.replace(/[^A-Za-z]/g, '');
  });
};

// export const maskTel = () => {
//   const telInputs = document.getElementById('last-name');
//   const im = new Inputmask('+7 (999) 999-99-99');
//   im.mask(telInputs);
// };
