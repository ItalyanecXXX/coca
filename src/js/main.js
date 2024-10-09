import '/scss/main.scss';

//components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { accordionFooter } from './components/footer.js';
import {
  useInsightSlider,
  usePartnerSlider,
  useTestimonialsSlider,
} from './components/home/slider.js';

useTheme();
useBurger();
useInsightSlider();
usePartnerSlider();
useTestimonialsSlider();
accordionFooter();
