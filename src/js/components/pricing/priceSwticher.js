export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="swticher"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const entriesPrice = document.querySelector('[data-price="enterprise"]');
  const yearStarter = document.querySelector('[data-price="yearStarter"]');
  const yearPopular = document.querySelector('[data-price="yearPopular"]');
  const yearEnterprise = document.querySelector(
    '[data-price="yearEnterprise"]',
  );
  const priceList = {
    starter: {
      default: 100,
      witchSale: 960,
    },
    popular: {
      default: 1400,
      witchSale: 13440,
    },
    enterprise: {
      default: 2100,
      witchSale: 20160,
    },
  };
  const yearList = {
    yearStarter: {
      default: '/mo',
      witchSale: '/yr.',
    },
    yearPopular: {
      default: '/mo',
      witchSale: '/yr.',
    },
    yearEnterprise: {
      default: '/mo',
      witchSale: '/yr.',
    },
  };
  const setPricesWitchSale = () => {
    starterPrice.textContent = priceList.starter.witchSale;
    popularPrice.textContent = priceList.popular.witchSale;
    entriesPrice.textContent = priceList.enterprise.witchSale;
    yearStarter.textContent = yearList.yearStarter.witchSale;
    yearPopular.textContent = yearList.yearPopular.witchSale;
    yearEnterprise.textContent = yearList.yearEnterprise.witchSale;
  };

  const setDefaultPrices = () => {
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    entriesPrice.textContent = priceList.enterprise.default;
    yearStarter.textContent = yearList.yearStarter.default;
    yearPopular.textContent = yearList.yearPopular.default;
    yearEnterprise.textContent = yearList.yearEnterprise.default;
  };

  switcher.checked = true;
  setPricesWitchSale();

  switcher.addEventListener('change', () => {
    if (switcher.checked) {
      setPricesWitchSale();
    } else {
      setDefaultPrices();
    }
  });
};
