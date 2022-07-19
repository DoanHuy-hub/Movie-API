const pool = require("../db");
const queries = require("./queries");

const getFilms = (req, res) => {
    pool.query(queries.getFilms, (error, result) => {
        if (error) throw error
        res.status(200).json(result.rows)
    })
}

const getFilmById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getFilmById, [id], (error, result) => {
        if (error) throw error
        res.status(200).json(result.rows)
    })
}

const addFilm = (req, res) => {
    const { film_name, year_produced, nation, source_film, source_trailer, sell_price, purchase_price, age_limit, summary, image, backdrop, studio_id } = req.body;
    pool.query(queries.addFilm, [film_name, year_produced, nation, source_film, source_trailer, sell_price, purchase_price, age_limit, summary, image, backdrop, studio_id], (error, result) => {
        if (error) throw error;
        res.status(201).send("Film Added Successfully");
    })
}

const removeFilm = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(queries.removeFilm, [id], (error, result) => {
        const noFilmFound = !result.rows.length
        if (noFilmFound) {
            res.send('Film does not exist')
        }
    })
}

const updateFilm = (req, res) => {
    const id = parseInt(req.params.id);
    const { film_name, year_produced, nation, source_film, source_trailer, sell_price, purchase_price, age_limit, summary, image, backdrop, studio_id } = req.body;

    pool.query(queries.getFilmById, [id], (error, result) => {
        const noFilmFound = !result.rows.length;
        if (noFilmFound) {
            res.send('Film does not exist');
            return;
        }

        pool.query(queries.updateFilm, [film_name, year_produced, nation, source_film, source_trailer, sell_price, purchase_price, age_limit, summary, image, backdrop, studio_id, id], (error, result) => {
            if (error) throw error
            res.status(200).send("Film updated")
        })
    });
};

module.exports = {
    getFilms,
    getFilmById,
    addFilm,
    removeFilm,
    updateFilm,
}