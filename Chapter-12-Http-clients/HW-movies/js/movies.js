Vue.component('movie', {
  template: '#movie-template',
  props: ['eachMovie'],
  methods: {
    deleteMovie: function (eachMovie) {
      var index = this.$parent.movies.indexOf(eachMovie);
      this.$parent.movies.splice(index, 1);
      axios.delete('http://localhost:3000/api/movies/' + eachMovie.id);
    },
    editMovie: function (eachMovie) {
      eachMovie.editing = true;
    },
    updateMovie: function (eachMovie) {
      axios.patch('http://localhost:3000/api/movies/' + eachMovie.id, eachMovie)
      eachMovie.editing = false;
    },
    storeMovie: function (eachMovie) {
      axios.post('http://localhost:3000/api/movies/', eachMovie).then(function(response){
        //vm.fetchMovies();
        Vue.set(eachMovie, 'id', response.data.id);
        eachMovie.editing = false;
      });
    }
  }
});

var vm =new Vue({
          el: '#app',
          data: {
            movies: []
          },
          methods: {
            fetchMovies: function () {
              axios.get('http://localhost:3000/api/movies').then(function(response){
                var moviesReady = response.data.map(function(movie){
                  movie.editing = false;
                  return movie
                });
                vm.movies = moviesReady;
              });
            },
            createMovie: function () {
              var newMovie = {
                "title": "",
                "director": "",
                "editing": true
              };
              this.movies.push(newMovie);
            }
          },
          mounted: function() {
            this.fetchMovies();
          }
        });
