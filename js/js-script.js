// Task #1
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// function sumTwoSmallestNumbers(numbers) {
//   let minScore1 = Infinity;
//   let minScore2 = Infinity;

//   for (const number of numbers) {
//     if (number < minScore1) {
//       minScore2 = minScore1;
//       minScore1 = number;
//     } else if (number < minScore2) {
//       minScore2 = number;
//     }
//   }

//   console.log(minScore1);
//   console.log(minScore2);
//   return minScore1 + minScore2;
// }
// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
// console.log(sumTwoSmallestNumbers([2, 0, 23, 8, 4, 10]));
// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));
// console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));

// Task #2

// function fireFight(s) {
//   if (s.includes("Fire")) {
//     return s.replaceAll("Fire", "~~");
//   }
//   return s;
// }

// console.log(
//   fireFight(
//     "Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"
//   )
// );

// Task #3
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000

// function past(h, m, s) {
//   const hours = 1000 * 60 * 60 * h;
//   const minutes = 1000 * 60 * m;
//   const seconds = 1000 * s;
//   return hours + minutes + seconds;
// }
// console.log(past(0, 1, 1));
// console.log(past(1, 1, 1));
// console.log(past(1, 0, 0));
//   Task #4

// function nbYear(p0, percent, aug, p) {
//   console.log(p0);
//   console.log(percent);
//   console.log(aug);
//   console.log(p);
//   const newPercent = percent * 0.01;
//   let years = 0;
//   let population = p0;

//   while (population < p) {
//     population = population * (1 + newPercent) + aug;
//     population = Math.floor(population);
//     years++;
//   }
//   return years;
// }
// console.log(nbYear(1500, 5, 100, 5000));
// console.log(nbYear(1500000, 0.25, 1000, 2000000));
// console.log(nbYear(1500000, 2.5, 10000, 2000000));
// console.log(nbYear(1000, 2, 50, 1214));

// task #4

// function candies(kids) {
//   let totalCandies = 0;
//   let maxAmountOfCandies = 0;
//   if (kids.length <= 1) {
//     return -1;
//   }
//   for (const kid of kids) {
//     if (kid > maxAmountOfCandies) {
//       maxAmountOfCandies = kid;
//     }
//   }
//   for (const kido of kids) {
//     if (kido < maxAmountOfCandies) {
//       totalCandies = totalCandies + maxAmountOfCandies - kido;
//     }
//   }
//   return totalCandies;
// }

// console.log(candies([5, 8, 6, 4]));
// console.log(candies([1, 2, 4, 6]));
// console.log(candies([1, 2]));
// console.log(candies([4, 2]));
// console.log(candies([1]));
// console.log(candies([]));
// console.log(candies([]));

//  task #
// function feast(beast, dish) {
//   if (
//     beast[0] === dish[0] &&
//     beast[beast.length - 1] === dish[dish.length - 1]
//   ) {
//     return true;
//   }
//   return false;
// }

// console.log(feast("great blue heron", "garlic naan"));

// const areaOrPerimeter = function (l, w) {
//   if (l === w) {
//     return l * w;
//   }
//   return 2 * l + 2 * w;
// };
// console.log(areaOrPerimeter(3, 3));
// console.log(areaOrPerimeter(6, 10));

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "e236468c654efffdf9704cd975a74a96";
let page = 1;
let moviesCount = 0;
let loadedMovies = []; // keep track of loaded movies
const moviesList = document.getElementById("movies");
const loadMoreBtn = document.getElementById("load-more");

function displayMovies(movies, i = 0, j = 3) {
  for (let i = 0; i < movies.length; i += 3) {
    const movieRow = document.createElement("div");
    movieRow.className = "movie-row";
    for (let j = i; j < i + 3 && j < movies.length; j++) {
      const movie = movies[j];
      // Check if movie is already loaded
      if (!loadedMovies.includes(movie.id)) {
        const movieElement = document.createElement("li");
        movieElement.innerHTML = `<h2>${movie.title}</h2>
                                    <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title} Poster">
                                    <p>${movie.overview}</p>`;
        movieElement.addEventListener("click", () =>
          showMovieDetails(movie.id)
        );
        movieRow.appendChild(movieElement);
        loadedMovies.push(movie.id); // add to loaded movies
        moviesCount++;
      }
    }
    moviesList.appendChild(movieRow);
  }
}

function loadMoreMovies() {
  const start = page * 9 - moviesCount;
  const end = start + 9;
  fetch(`${BASE_URL}movie/now_playing?api_key=${API_KEY}&page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      const movies = data.results.slice(start, end);
      displayMovies(movies, 0, 3);
      if (data.total_pages <= page) {
        loadMoreBtn.style.display = "none";
      }
    })
    .catch((error) => console.error(error));
  page++;
}

fetch(`${BASE_URL}movie/now_playing?api_key=${API_KEY}&page=${page}`)
  .then((response) => response.json())
  .then((data) => {
    const movies = data.results.slice(0, 9);
    displayMovies(movies);
    if (data.total_pages <= page) {
      loadMoreBtn.style.display = "none";
    }
  })
  .catch((error) => console.error(error));

loadMoreBtn.addEventListener("click", loadMoreMovies);

// Отправляем GET-запрос на получение данных о фильмах
fetch(`${BASE_URL}movie/now_playing?api_key=${API_KEY}&page=${page}`)
  .then((response) => response.json())
  .then((data) => {
    const movies = data.results.slice(0, 9); // Ограничиваем количество фильмов до 10
    displayMovies(movies);
    // Если больше фильмов нет, скрываем кнопку "Загрузить больше фильмов"
    if (data.total_pages <= page) {
      loadMoreBtn.style.display = "none";
    }
  })
  .catch((error) => console.error(error));

// Добавляем обработчик события для кнопки "Загрузить больше фильмов"
loadMoreBtn.addEventListener("click", loadMoreMovies);
