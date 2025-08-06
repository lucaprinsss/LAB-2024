'use strict'

import dayjs from 'dayjs';

function Film(id, title, userId = 1, isFavorite = false, watchDate =null, rating =null) {
    this.id = id;
    this.title = title;
    this.userId = userId;
    this.isFavorite = isFavorite;
    this.watchDate = watchDate ? new dayjs(watchDate) : null;
    this.rating = rating ? rating : 0;

}

function FilmLibrary() {
    this.films = [];

    this.addNewFilm = (film) => {
        this.films.push(film);
    }

    this.toString = () => {
        return this.films.map((film) => `Id: ${film.id}, Title: ${film.title}, Favorite: ${film.isFavorite}, Watch date: ${film.watchDate? film.watchDate.format('MMMM DD, YYYY') : null}, Score: ${film.rating}, User: ${film.userId}`).join('\n');
    }
}

function main(){
    let library = new FilmLibrary();
    library.addNewFilm(new Film(1, "Pulp Fiction", 1, true, "2024-03-10", 5));
    library.addNewFilm(new Film(2, "21 Grams", 1, true, "2024-03-17", 4));
    library.addNewFilm(new Film(3, "Star Wars", 1, false));
    library.addNewFilm(new Film(4, "Matrix", 1));
    library.addNewFilm(new Film(5, "Shrek", 1, false, "2024-03-21", 3));
    console.log(library.toString());
}

main();
