export const useTheme = () => {
  const themeTarget = document.querySelector('[data-theme]');
  const themeSwticher = document.querySelector('[data-theme-switcher]');

  const themeTargetDataset = themeTarget.dataset;

  const theme = localStorage.getItem('theme') || 'light';
  themeTargetDataset.theme = theme;

  if (theme === 'dark') {
    themeSwticher.checked = true;
  }

  themeSwticher.addEventListener('click', () => {
    if (themeTargetDataset.theme === 'light') {
      themeTargetDataset.theme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      themeTargetDataset.theme = 'light';
      localStorage.setItem('theme', 'light');
    }
  });
};
