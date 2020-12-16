import React, { Component } from "react"
import { getMovies } from "../../services/fakeMovieService"
import Like from'../Like/Like.component'
import Pagination from "../Pagination/Pagination.component";

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
    const {currentPage, movies, pageSize } = this.state
    if (!count) return <h4>There are no movies in the database.</h4>

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
              <th />
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td style={{cursor: 'pointer'}}><Like liked={movie.liked} handleLike={() => this.handleLike(movie)}/></td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination itemCount={count} currentPage={currentPage} pageSize={pageSize} onPageChange={this.handlePageChange} />
      </React.Fragment>
    );
  }
}

export default Movies