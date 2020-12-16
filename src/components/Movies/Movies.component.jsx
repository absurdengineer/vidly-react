import React, { Component } from "react"
import { getMovies } from "../../services/fakeMovieService"
import MovieItem from "../MovieItem/MovieItem.component";
import Pagination from "../Pagination/Pagination.component";
import {paginate} from '../Pagination/paginate.utils'

class Movies extends Component {
  state = {
    movies: getMovies().filter(movie => movie._id),
    pageSize : 4,
    currentPage : 1
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

  render() {
    const { length: count } = this.state.movies
    const {currentPage, pageSize, movies : allMovies } = this.state
    if (!count) return <h4>There are no movies in the database.</h4>
    const movies =  paginate(allMovies, currentPage, pageSize)
    return (
      <React.Fragment>
        <h4>Showing {count} movies in the database.</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>Like</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <MovieItem key={movie._id} movie={movie} handleLike={this.handleLike} handleDelete={this.handleDelete} />
            ))}
          </tbody>
        </table>
        <Pagination itemCount={count} currentPage={currentPage} pageSize={pageSize} onPageChange={this.handlePageChange} />
      </React.Fragment>
    );
  }
}

export default Movies