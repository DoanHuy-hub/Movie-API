const getFilms = `SELECT * FROM film`
const getFilmById = `SELECT * FROM film WHERE film_id = $1`;
const addFilm = `INSERT INTO film 
(film_name, year_produced, nation, source_film, source_trailer, sell_price, purchase_price, age_limit, summary, image, backdrop, studio_id)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;
const updateFilm = `UPDATE film SET film_name = $1, year_produced = $2, nation = $3, source_film = $4, source_trailer = $5, sell_price = $6, purchase_price = $7, age_limit = $8, summary = $9, image = $10, backdrop = $11, studio_id = $12 WHERE film_id = $13`;
const removeFilm = `DELETE FROM film WHERE film_id = $1`;

module.exports = {
    getFilms,
    addFilm,
    getFilmById,
    updateFilm,
    removeFilm,
}