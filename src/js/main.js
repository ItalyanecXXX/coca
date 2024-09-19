import '../assets/scss/main.scss';

//components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useInsightSlider, usePartnerSlider } from './components/slider.js';

useTheme();
useBurger();
useInsightSlider();
usePartnerSlider();
