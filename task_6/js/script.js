/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
  movies: [
      "Логан",
      "Лига справедливости",
      "2Ла-ла лэнд",
      "1Одержимость",
      "Скотт Пилигрим против всех"
  ]
};

let films = Array.from(document.querySelectorAll(".promo__interactive-item")),
    newFilm = document.querySelector(".adding__input"),
    filmAdd = document.querySelector("button");

document.querySelectorAll(".promo__adv img").forEach((t) => {
  t.remove();
});

document.querySelector(".promo__genre").textContent = "Драма";

document.querySelector(".promo__bg").style.backgroundImage = "url('img/bg.jpg')";

function movSort() {
  movieDB.movies.sort();
  for (let i = 0; i < movieDB.movies.length; i++) {
    if (movieDB.movies[i].length > 21) {
      films[i].innerHTML = i+1 + '. ' + movieDB.movies[i].substring(0, 21) + '...' + '<div class="delete"></div>';
    } else {
      films[i].innerHTML = i+1 + '. ' + movieDB.movies[i] + '<div class="delete"></div>';
    }
  }
}

movSort();

filmAdd.addEventListener('click', function (e) {
  e.preventDefault();

  let addFilm = newFilm.value;
  movieDB.movies.push(addFilm);
  movSort();
  if (document.querySelector('input[type="checkbox"]').checked) {
    console.log("Добавляем любимый фильм");
  }
  e.target.parentElement.reset();
});

document.querySelectorAll(".delete").forEach((film) => {
  film.addEventListener('click', () => {
    let filmName = (film.parentElement.textContent).slice(3);
    let exFilm = movieDB.movies.indexOf(filmName);
    movieDB.movies.splice(exFilm, 1);
    movSort();
  });
});