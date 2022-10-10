const yargs = require("yargs/yargs")(process.argv.slice(2)).argv;
const MovieDB = require("./utils/movieDB");

const app = (yargs) => {
  const newMovieDB = new MovieDB();

  if (yargs.action && yargs.action.length > 0) {
    switch (yargs.action) {
      case "add":
        newMovieDB.add(yargs.movie1);

        if (yargs.movie2 && yargs.movie2.length > 0) {
          newMovieDB.add(yargs.movie2);
        }

        if (yargs.movie3 && yargs.movie3.length > 0) {
          newMovieDB.add(yargs.movie3);
        }

        newMovieDB.viewmovies();
        break;

      case "modify":
        newMovieDB.modify(yargs.id, yargs.movie);
        newMovieDB.viewmovies();
        break;

      case "delete":
        newMovieDB.delete(yargs.id);
        newMovieDB.viewmovies();
        break;

      case "view":
        newMovieDB.viewmovie(yargs.id1);

        if (yargs.id2) {
          newMovieDB.viewmovie(yargs.id2);
        }

        if (yargs.id3) {
          newMovieDB.viewmovie(yargs.id3);
        }
        break;

      case "viewall":
        newMovieDB.viewmovies();
        break;
    }
  } else {
    console.log(`No Action Supplied`);
  }
};

app(yargs);
