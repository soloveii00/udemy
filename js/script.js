"use strict";

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');
    
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');
//     }

// }

// start();


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('сколько фильмов вы уже посмотрели?', '');
        
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('сколько фильмов вы уже посмотрели?', '');
        }
    
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('просмотрено довольно мало фильмов', '');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('вы киноман');
        } else {
            console.log('произошла ошибка');
        }
        
    },
    showMyBD: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log('error');
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}?`, '').toLowerCase();
               
            if (genre !== null && genre !== '') {
                personalMovieDB.genres[i - 1] = genre;
                personalMovieDB.genres.sort();
            } else {
                i--;
            }
        }
        // const genres = prompt(`Ваш любимый жанр под номером ${i}?`, '');
               
        //     if (genres !== null && genres !== '') {
        //         personalMovieDB.genres = genres.split(', ');
        //         personalMovieDB.genres.sort();
        //     } else {
        //         i--;
        //     }
        // }
        // personalMovieDB.genres.forEach((item, i) => {
        //     console.log(`Любимый жанр ${i + 1} - это ${item}`);
        // });
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);

    
        });
    } 
};

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('один из последнх просмотренных фильмов', ''),
//               b = +prompt('на сколько оцените его', '');
    
//         if (a != null && b!= null && a != "" && b != "" && a.length < 50) {
//             personalMovieDB.movies[a] = b; 
//             console.log('done');
//         }  else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();


// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('просмотрено довольно мало фильмов', '');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('вы киноман');
//     } else {
//         console.log('произошла ошибка');
//     }
    
// }

// detectPersonalLevel();

// function showMyBD() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     } else {
//         console.log('error');
//     }
// }

// showMyBD();



// function writeYourGenres() {

//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}?`, '');
        

//         if (genre !== null && genre !== '') {
//             personalMovieDB.genres[ i - 1] = genre;
//         } else {
//             i--;
//         }
//     }
// }

    // writeYourGenres();
    


// console.log(personalMovieDB);





// ------------------  variant cicle

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

// --------------------- variant cicle



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





