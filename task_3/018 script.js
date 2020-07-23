/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
  while (!(numberOfFilms > 0)) { // "" || numberOfFilms < 0 || null || undefined || false
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function watched() {
  let i = numberOfFilms;
  while (i > 0) {
    let lastFilm = prompt("Один из последних просмотренных фильмов?", "");
    let filmCount = prompt("На сколько оцените его?", "");
    personalMovieDB.movies[lastFilm] = filmCount;
    i--;
  }
}

function showMyDB() {
  if (!personalMovieDB.privat) {
    console.log(personalMovieDB);
  } else {
    return false;
  }
}

function writeYourGenres() {
  let j = 0;
  while (j < 3) {
    personalMovieDB.genres.push = prompt(`Ваш любимый жанр под номером ${j}`, "");
    j++;
  }
}

function personalRating() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}