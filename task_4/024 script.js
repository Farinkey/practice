/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

let numberOfFilms;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    filmCount: function () {
      while (!(numberOfFilms > 0)) { // "" || numberOfFilms < 0 || null || undefined || false
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
      }
      personalMovieDB.count = numberOfFilms;
    },
    watched: function () {
      let i = numberOfFilms;
      while (i > 0) {
        let lastFilm = prompt("Один из последних просмотренных фильмов?", "");
        let filmRating = prompt("На сколько оцените его?", "");
        personalMovieDB.movies[lastFilm] = filmRating;
        i--;
      }
    },
    showMyDB: function () {
      if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
      } else {
        return;
      }
    },
    writeYourGenres: function () {
      let j = 1;
      while (j < 4) {
        let genre = prompt(`Ваш любимый жанр под номером ${j}`, "");
        while (genre === null || genre === "") {
          genre = prompt(`Ваш любимый жанр под номером ${j}`, "");
        }
        personalMovieDB.genres.push(genre);
        j++;
      }
      personalMovieDB.genres.forEach((e, t) => {
        console.log(`Любимый жанр ${t + 1} - это ${e}`);
      });
    },
    personalRating: function () {
      if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
      } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
      } else {
        console.log("Произошла ошибка");
      }
    },
    toggleVisibleMyDB: function() {
      if (personalMovieDB.privat) {
        personalMovieDB.privat = false;
      } else {
        personalMovieDB.privat = true;
      }
    }
};

function start() {
  personalMovieDB.filmCount();
  personalMovieDB.watched();
  personalMovieDB.writeYourGenres();
  personalMovieDB.showMyDB();
  personalMovieDB.personalRating();
}

start();