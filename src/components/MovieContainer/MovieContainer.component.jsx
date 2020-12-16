import React, {Component} from 'react'
import {deleteMovie, getMovie, getMovies} from '../../services/fakeMovieService'
import MovieItem from '../MovieItem/MovieItem.component'

class MovieContainer extends Component {
    state = { movies : getMovies() }

    handleDelete = id => {
        deleteMovie(id)
        this.setState({movies :getMovies()})
    }

    handleLike = (id) => {
        const movies = [...this.state.movies]
        const movie = getMovie(id)
        console.log(movie)
        const index = movies.indexOf(movie)
        movies[index] = {...movies[index]}
        movies[index].liked = !movies[index].liked
        console.log(movies);
        this.setState({movies})
    }

    render() { 
        const {movies} = this.state
        return ( 
        <div>
        { movies.length ?
        <div className="table-responsive mt-5">
            <h5>Showing {movies.length} of Movies from Database...</h5>
            <table className="table table-hoverable table-striped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {movies.map( ({_id, title, genre, numberInStock,dailyRentalRate, liked}) => 
                    <MovieItem
                        key={_id} 
                        _id={_id}
                        title={title} 
                        genre={genre.name} 
                        numberInStock={numberInStock} 
                        dailyRentalRate={dailyRentalRate}
                        handleDelete={this.handleDelete}
                        handleLike={this.handleLike}
                        liked={liked}
                    />
                    )}
                </tbody>
            </table>
        </div>
        :
        <div><h5>There are no Movies in the Database...</h5></div>
        }
        </div>
         );
    }
}
 
export default MovieContainer;