import React, { Component } from "react"
import _ from 'lodash'
import { getMovies } from "../../services/fakeMovieService"
import Pagination from "../Pagination/Pagination.component"
import {paginate} from '../Pagination/paginate.utils'
import Genres from "../Genres/Genres.component";
import { getGenres } from "../../services/fakeGenreService"
import MovieTable from "../MovieTable/MovieTabe.component"

class Movies extends Component {
  state = {
    movies: [],
    genres : [],
    pageSize : 4,
    currentPage : 1,
    currentGenre : '',
    sortColumn : {path : 'title', order : 'asc'}
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id)
    this.setState({ movies });
  }
  handleLike = movie => {
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    movies[index] = {...movies[index]}
    movies[index].liked = !movies[index].liked
    this.setState({movies})
  }
  handlePageChange = pageNumber => {
    this.setState({currentPage : pageNumber})
  }
  handleSelect = genre => {
    this.setState({currentGenre : genre})
    this.setState({currentPage : 1})
  }
  handleSort = sortColumn => {
    this.setState({sortColumn})
  }
  componentDidMount() {
    this.setState({
      movies : getMovies(), 
      genres : getGenres()
    })
  }

  render() {
    const { length: count } = this.state.movies
    const {currentPage, currentGenre, pageSize, genres, sortColumn, movies : allMovies } = this.state
    if (!count) return <h4>There are no movies in the database.</h4>
    const filtered = currentGenre ? allMovies.filter(m => m.genre._id === currentGenre._id) : allMovies
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
    const movies =  paginate(sorted, currentPage, pageSize)
    
    return (
      <div className="row">
        <div className="col-3">
          <Genres 
            genres={genres} 
            onItemSelect={this.handleSelect} 
            currentGenre={currentGenre}
          />
        </div>
        <div className="col">
          <h4>Showing {filtered.length} movies in the database.</h4>
          <MovieTable 
            movies={movies} 
            sortColumn={sortColumn}
            handleLike={this.handleLike} 
            handleDelete={this.handleDelete} 
            handleSort={this.handleSort} 
          />
          <Pagination 
            itemCount={filtered.length} 
            currentPage={currentPage} 
            pageSize={pageSize} 
            onPageChange={this.handlePageChange} 
          />
        </div>
      </div>
    );
  }
}

export default Movies