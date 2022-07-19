const {Router} = require('express')
const controller = require('./controller')
const router = Router()

router.get('/', controller.getFilms);
router.post('/', controller.addFilm);
router.get('/:id', controller.getFilmById);
router.put('/:id', controller.updateFilm);
router.delete('/:id', controller.removeFilm);

module.exports = router