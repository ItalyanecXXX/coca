import '/scss/jobs.scss';

//components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { accordionFooter } from './components/footer.js';
import {
  useJobsTopSlider,
  useArticlesSlider,
} from './components/jobs/slaiders.js';

useTheme();
useBurger();
accordionFooter();
useJobsTopSlider();
useArticlesSlider();
