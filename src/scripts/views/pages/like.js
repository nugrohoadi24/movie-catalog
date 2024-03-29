import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import FavoriteMovieSearchPresenter from './liked-movies/favorite-movie-search-presenter';
import FavoriteMovieSearchView from './liked-movies/favorite-movie-search-view';
import FavoriteMovieShowPresenter from './liked-movies/favorite-movie-show-presenter';
 
const view = new FavoriteMovieSearchView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteMovieShowPresenter({
      view,
      favoriteMovies: FavoriteMovieIdb
    });

    new FavoriteMovieSearchPresenter({
      view,
      favoriteMovies: FavoriteMovieIdb
    });
  },
};

export default Like;
