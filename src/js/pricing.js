import '/scss/pricing.scss';

//components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { accordionFooter } from './components/footer.js';
import { usePriceSwitcher } from './components/pricing/priceSwticher.js';

useTheme();
useBurger();
accordionFooter();
usePriceSwitcher();
