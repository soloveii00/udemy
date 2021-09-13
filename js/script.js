"use strict";

const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('один из последнх просмотренных фильмов', ''),
          b = +prompt('на сколько оцените его', '');

    if (a != null && b!= null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b; 
        console.log('done');
    }  else {
        console.log('error');
        i--;
    }
}



// ------------------ 

// let i = 0;

// while (i < 2) {
//     const a = prompt('один из последнх просмотренных фильмов', ''),
//           b = +prompt('на сколько оцените его', '');
//     i++;
//     if (a != null && b!= null && a != "" && b != "" && a.length < 50) {
//                 personalMovieDB.movies[a] = b; 
//                 console.log('done');
//             }  else {
//                 console.log('error');
//                 i--;
//             }
   
// }

// ---------------------



// let i = 0;
// do {
//     const a = prompt('один из последнх просмотренных фильмов', ''),
//           b = +prompt('на сколько оцените его', '');
//     i++;
//     if (a != null && b!= null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b; 
//         console.log('done');
// }  else {
//         console.log('error');
//     i--;
// }
// } while (i < 2);


// -------------------


if (personalMovieDB.count < 10) {
    console.log('просмотрено довольно мало фильмов', '');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('вы киноман');
} else {
    console.log('произошла ошибка');
}

console.log(personalMovieDB);



