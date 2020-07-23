var myMap;
// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  myMap = new ymaps.Map(
    "map",
    {
      // При инициализации карты обязательно нужно указать
      // её центр и коэффициент масштабирования.
      center: [7.89235, 98.29469], // Москва
      zoom: 16,
    },
    {
      searchControlProvider: "yandex#search",
    }
  );
  // Создаем геообъект с типом геометрии "Точка".
  myGeoObject = new ymaps.GeoObject(
    {
      // Описание геометрии.
      geometry: {
        type: "Point",
        coordinates: [7.89235, 98.29469],
      },
      // Свойства.
      properties: {
        // Контент метки.
        iconContent: "GRAND HILTON HOTEL",
        hintContent: "GRAND HILTON HOTEL",
      },
    },
    {
      // Опции.
      // Иконка метки будет растягиваться под размер ее содержимого.
      preset: "islands#blackStretchyIcon",
      // Метку можно перемещать.
      draggable: true,
    }
  );
  myMap.geoObjects.add(myGeoObject);
}
