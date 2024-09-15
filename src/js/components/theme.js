export const useTheme = () => {
  const themeTarget = document.querySelector('[data-theme]');
  const themeSwticher = document.querySelector('[data-theme-switcher]');
  themeSwticher.addEventListener('click', () => {
    const themeTargetDataset = themeTarget.dataset;
    themeTargetDataset.theme == 'light'
      ? (themeTargetDataset.theme = 'dark')
      : (themeTargetDataset.theme = 'light');
  });
};
