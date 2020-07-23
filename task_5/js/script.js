/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

document.querySelectorAll(".promo__adv img").forEach((t) => {
    t.remove();
});

document.querySelector(".promo__genre").textContent = "Драма";

document.querySelector(".promo__bg").style.backgroundImage = "url('img/bg.jpg')";

let films = Array.from(document.querySelectorAll(".promo__interactive-item"));

movieDB.movies.sort();

for (let i = 0; i < films.length; i++) {
    films[i].innerHTML = i+1 + '. ' + movieDB.movies[i] + '<div class="delete"></div>';
}
