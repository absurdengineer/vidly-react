import React from 'react'
import MovieItem from '../MovieItem/MovieItem.component';

const MovieTable = props => {
    const {movies, handleLike, handleDelete, handleSort} = props
    return ( 
        <table className="table">
            <thead>
                <tr>
                <th onClick={()=> {handleSort('title')}}>Title</th>
                <th onClick={()=> {handleSort('genre.name')}}>Genre</th>
                <th onClick={()=> {handleSort('numberInStock')}}>Stock</th>
                <th onClick={()=> {handleSort('dailyRentalRate')}}>Rate</th>
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