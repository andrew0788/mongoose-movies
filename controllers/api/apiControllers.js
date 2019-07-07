const Movie = require('../../models/movie');


module.exports = {
  getAllMovies,
  getOneMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};


function getAllMovies(req, res){
  Movie.find({}).populate('cast').then(foundMovies => {
    res.status(200).json(foundMovies);
  });
};

function getOneMovie(req, res){
  Movie.findById(req.params.id).populate('cast')
  .then(movie => {
    res.status(200).json(movie);
  })
};

function createMovie(req, res) {
  Movie.create(req.params.id).populate('cast').then(movie => {
    res.status(201).json(movie);
  })
};

function updateMovie(req, res){
  Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
    cast.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(movie => {
    res.status(200).json(movie);
  })
};

function deleteMovie(req, res) {
  Movie.findByIdAndRemove(req.params.id).then(movie => {
    res.status(200).json(movie);
  })
};
