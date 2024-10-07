// Аккордион
export const accordionFooter = () => {
  if (document.documentElement.clientWidth > 374) return;
  const accordionLists = document.querySelector('.accordion-list');
  accordionLists.addEventListener('click', (e) => {
    const accordionList = e.currentTarget;
    const accordionOpendItem = accordionList.querySelector(
      '.accordion-list__item--opened',
    );
    const accordionOpendContent = accordionList.querySelector(
      '.accordion-list__item--opened .footer__sublist',
    );

    const accordionControl = e.target.closest('.accordion-list__control');
    if (!accordionControl) return;
    e.preventDefault();

    const accordionItem = accordionControl.parentElement;
    const accordionContent = accordionControl.nextElementSibling;

    if (accordionOpendItem && accordionItem != accordionOpendItem) {
      accordionOpendContent.style.maxHeight = null;
      accordionOpendItem.classList.remove('accordion-list__item--opened');
    }
    accordionItem.classList.toggle('accordion-list__item--opened');

    if (accordionItem.classList.contains('accordion-list__item--opened')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = null;
    }
  });
};
