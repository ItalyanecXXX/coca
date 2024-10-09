import mapMarkerIcon from '/assets/icons/yandex-map-marker-icon.svg';
export const yandexMap = () => {
  const themeTarget = document.querySelector('[data-theme]');
  const themeSwitcher = document.querySelector('[data-theme-switcher]');
  // let theme = localStorage.getItem('theme') || 'light';

  const themeTargetDataset = themeTarget.dataset;
  // themeTargetDataset.theme = theme;
  let theme = themeTargetDataset.theme;

  function initMap() {
    ymaps3.ready.then(() => {
      const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapDefaultFeaturesLayer,
        YMapMarker,
      } = ymaps3;

      const map = new YMap(document.getElementById('map'), {
        location: {
          center: [20, 30],
          zoom: 1.5,
        },
      });

      const featuresLayer = new YMapDefaultFeaturesLayer();
      map.addChild(featuresLayer);

      // Создаем кастомный маркер
      function addCustomMarker() {
        const content = document.createElement('div');
        content.className = 'hero__map-marker';

        const marker = new YMapMarker(
          {
            coordinates: [130, 20],
            draggable: false,
          },
          content,
        );

        // Добавляем содержимое маркера
        content.innerHTML = `
            <div class="hero__map-marker-info">
              <h4 class="hero__map-marker-title">Yogja, INA</h4>
              <p class="hero__map-marker-location">100 Smith Street Collingwood VIC 3066 AU</p>
            </div>
<<<<<<< HEAD
            <img class="hero__map-marker-icon" src="${mapMarkerIcon}" width="54" height="54" alt="marker in map" />
=======
>>>>>>> 3fd99113475dd42f7247f94d4515e0574f73855b
        `;

        map.addChild(marker);
      }

      // Темные стили
      function layerDark() {
        const layerDark = new YMapDefaultSchemeLayer({
          customization: [
            {
              tags: {
                all: ['water'],
              },
              stylers: [
                {
                  color: '#1d1e25',
                },
              ],
            },
            {
              tags: {
                all: ['landscape'],
              },
              stylers: [
                {
                  color: '#acacb9',
                },
              ],
            },
            {
              tags: {
                all: ['road'],
              },
              stylers: [
                {
                  color: '#454554',
                },
              ],
            },
          ],
        });
        map.addChild(layerDark);
        window.layerDark = layerDark;
      }

      // Светлые стили
      function layerLight() {
        const layerLight = new YMapDefaultSchemeLayer({
          customization: [
            {
              tags: {
                all: ['water'],
              },
              stylers: [
                {
                  color: '#FFF',
                },
              ],
            },
            {
              tags: {
                all: ['landscape'],
              },
              stylers: [
                {
                  color: '#acacb9',
                },
              ],
            },
            {
              tags: {
                all: ['road'],
              },
              stylers: [
                {
                  color: '#e0e0e0',
                },
              ],
            },
          ],
        });
        map.addChild(layerLight);
        window.layerLight = layerLight;
      }

      // Удаление слоев
      function removeLayers() {
        if (window.layerDark) {
          map.removeChild(window.layerDark);
          window.layerDark = null;
        }
        if (window.layerLight) {
          map.removeChild(window.layerLight);
          window.layerLight = null;
        }
      }

      // Переключение темы карты
      function switchMapTheme(newTheme) {
        removeLayers();
        if (newTheme === 'dark') {
          layerDark();
        } else {
          layerLight();
        }
      }

      // Инициализация слоя по текущей теме
      if (theme === 'dark') {
        layerDark();
      } else {
        layerLight();
      }

      addCustomMarker();

      themeSwitcher.addEventListener('click', () => {
        const currentTheme = themeTargetDataset.theme;
        switchMapTheme(currentTheme);
      });

      window.YMapDefaultSchemeLayer = YMapDefaultSchemeLayer;
      window.map = map;
      window.removeLayers = removeLayers;
      window.switchMapTheme = switchMapTheme;
    });
  }

  initMap();
};
