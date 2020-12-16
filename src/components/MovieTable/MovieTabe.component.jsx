import React from 'react'
import MovieItem from '../MovieItem/MovieItem.component';

const MovieTable = props => {
    const {movies, handleLike, handleDelete} = props
    return ( 
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
                <MovieItem key={movie._id} movie={movie} handleLike={handleLike} handleDelete={handleDelete} />
                ))}
            </tbody>
        </table>
     );
}
 
export default MovieTable;