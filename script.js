/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

function dataGeneration(max) {
    return Math.floor(Math.random() * max);
}

const currentForecastH1 = document.querySelector("h1");
const currentForecastP = document.querySelector("p");
const forecastButton = document.querySelector(".forecast-btn");
const currentForecast = document.querySelector(".current-forecast");
const forecasts = document.querySelector(".forecasts");
forecastButton.addEventListener('click', function() {
    let predictionNumber = dataGeneration(3); // сгенерированное число в п.1
    let predictionText = "";
    if (predictionNumber == 0) {
        predictionText = "Все будет супер!";
    } else if (predictionNumber == 1) {
        predictionText = "Все будет еще лучше!";
    } else {
        predictionText = "На WB отменят все комиссии";
    }
    currentForecastH1.textContent = predictionText;

    const probabilityNumber = dataGeneration(101);
    const text = "Вероятность: " + probabilityNumber + "%";
    currentForecastP.textContent = text;


    saveResult(predictionText, text);
})

const forecastItem = document.querySelector("#forecast-item");

function saveResult(predictionText, currentForecastP) {
    const forecast = forecastItem.content.cloneNode(true);

    forecast.querySelector("h3").textContent = predictionText;
    forecast.querySelector("p").textContent = currentForecastP;

    forecasts.prepend(forecast);
}