let movieArr = [
  {
    id: "333",
    title: "3:33",
    actor: "Sandy",
    director: "Nambikkai Chandru",
    released: "2021",
  },
  {
    id: "666",
    title: "The Omen",
    actor: "Gregory Peck",
    director: "Richard Donner",
    released: "1976",
  },
  {
    id: "999",
    title: "Triple 9",
    actor: "Casey Affleck",
    director: "John Hillcoat",
    released: "2016",
  },
];

class MovieDB {
  add(movie) {
    if (movie && movie.length > 0) {
      const mov = movie.split(",");

      const newMovie = {
        id: mov[0].trim() || "Not Specified",
        title: mov[1].trim() || "Not Specified",
        actor: mov[2].trim() || "Not Specified",
        director: mov[3].trim() || "Not Specified",
        released: mov[4].trim() || "Not Specified",
      };

      movieArr.push(newMovie);

      console.log(`\n\nMovie Added`);
    } else {
      console.log(`\n\nNo Movie To Add`);
    }
  }

  modify(id, movie) {
    const selectedMovie = movieArr.filter((movie) => {
      return +movie.id === +id;
    });

    if (selectedMovie[0]) {
      if (movie && movie.length > 0) {
        const mov = movie.split(",");

        movieArr.forEach((movie) => {
          if (+movie.id === +id) {
            movie.title = mov[0].trim() || "Not Specified";
            movie.actor = mov[1].trim() || "Not Specified";
            movie.director = mov[2].trim() || "Not Specified";
            movie.released = mov[3].trim() || "Not Specified";
          }
        });

        console.log(`\n\nMovie Updated`);
      } else {
        console.log(`\n\nNo Movie To Update`);
      }
    } else {
      console.log(`\n\nNo Movie Found With ID: ${id}`);
    }
  }

  delete(id) {
    if (Number.isInteger(id)) {
      const selectedMovie = movieArr.filter((movie) => {
        return +movie.id === +id;
      });

      if (selectedMovie[0]) {
        const newMovieArr = movieArr.filter((movie) =>
          +movie.id === +id ? false : true
        );

        movieArr = newMovieArr;

        console.log(`\n\nMovie Deleted`);
      } else {
        console.log(`\n\nNo Movie Found With ID: ${id}`);
      }
    } else {
      console.log(`\n\nNo Movie To Delete`);
    }
  }

  viewmovie(id) {
    if (Number.isInteger(id)) {
      const selectedMovie = movieArr.filter((movie) => {
        return +movie.id === +id;
      });

      if (selectedMovie[0]) {
        const movie = selectedMovie[0];

        console.log(`\n\nMOVIE DETAILS\n-------------\n`);

        console.log(
          `ID: ${movie.id}\nTitle: ${movie.title.toUpperCase()}\nActor: ${
            movie.actor
          }\nDirector: ${movie.director}\nReleased: ${movie.released}\n`
        );
      } else {
        console.log(`\n\nNo Movie Found With ID: ${id}`);
      }
    } else {
      console.log(`\n\nNo Movie To View`);
    }
  }

  viewmovies() {
    console.log(`\n\nANDY'S MOVIE DATABASE\n---------------------\n`);

    movieArr.forEach((movie) => {
      console.log(
        `ID: ${movie.id}\nTitle: ${movie.title.toUpperCase()}\nActor: ${
          movie.actor
        }\nDirector: ${movie.director}\nReleased: ${movie.released}\n`
      );
    });
  }
}

module.exports = MovieDB;
