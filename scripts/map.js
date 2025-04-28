document.addEventListener("DOMContentLoaded", function () {
  const viewMapButton = document.getElementById("view-map-button");
  const mapIframe = document.getElementById("map-iframe");

  if (viewMapButton && mapIframe) {
    // Перевіряємо, чи існують елементи
    viewMapButton.addEventListener("click", function () {
      mapIframe.style.display = "block"; // Показати iframe при кліку
    });

    // Додатково: Додамо можливість закрити iframe при кліку за його межами
    document.addEventListener("click", function (event) {
      if (
        mapIframe.style.display === "block" &&
        !mapIframe.contains(event.target) &&
        event.target !== viewMapButton
      ) {
        mapIframe.style.display = "none"; // Приховати iframe, якщо клікнути за його межами та не на кнопку
      }
    });
  } else {
    console.error(
      "Не знайдено елементи з ID 'view-map-button' або 'map-iframe'."
    );
  }
});
