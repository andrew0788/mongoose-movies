const express = require('express');
const router = express.Router();
const apiController= require('../controllers/api/apiControllers');


router.get('/movies/', apiController.getAllMovies);
router.get('/movies/:id', apiController.getOneMovie);
router.post('/movies/', apiController.createMovie)
router.put('/movies/:id', apiController.updateMovie);
router.delete('/movies/:id', apiController.deleteMovie);
module.exports = router;
