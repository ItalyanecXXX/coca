import '/scss/about.scss';

//components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { accordionFooter } from './components/footer.js';
import {
  useAboutTopSlider,
  useAboutBottomSlider,
} from './components/about/sliders.js';

useTheme();
useBurger();
accordionFooter();
useAboutTopSlider();
useAboutBottomSlider();
