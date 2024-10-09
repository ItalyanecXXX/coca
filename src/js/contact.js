import '/scss/contact.scss';

//components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { accordionFooter } from './components/footer.js';
import { usePartnerSlider } from './components/home/slider.js';
import { yandexMap } from './map.js';
import { usePhone } from './components/contact/phone.js';
import { useValid } from './components/contact/phone.js';

useTheme();
useBurger();
accordionFooter();
usePartnerSlider();
yandexMap();
usePhone();
useValid();
