'use strict'

function Film(id, title, userId = 1, isFavorite = false, watchDate =null, rating =null) {
    this.id = id;
    this.title = title;
    this.userId = userId;
    this.isFavorite = isFavorite;
    this.watchDate = watchDate;
    this.rating = rating;
}

function FilmLibrary() {
    this.films = [];

    this.addNewFilm = (film) => {
        this.films.push(film);
    }

    this.toString = () => {
        return this.films.map((film) => `Id: ${film.id}, Title: ${film.title}, Favorite: ${film.isFavorite}, Watch date: ${film.watchDate}, Score: ${film.rating}, User: ${film.userId}`).join('\n');
    }
}

let library = new FilmLibrary();
library.addNewFilm(new Film(1, 'Inception', 1, true, '2021-01-01', 5));
library.addNewFilm(new Film(2, 'Bel film', 1));
console.log(library.toString());
