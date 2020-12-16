import React, {Component} from 'react'
import MovieItem from '../MovieItem/MovieItem.component';

class MovieTable extends Component {
    
    raiseSort = path => {
        let sortColumn = {...this.props.sortColumn}
        if(sortColumn.path === path)
        sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc'
        else 
        sortColumn = { path, order : 'asc'}
        this.props.handleSort(sortColumn)
    }

    render() { 
        const {movies, handleLike, handleDelete} = this.props
        return ( 
            <table className="table">
                <thead>
                    <tr>
                    <th onClick={()=> {this.raiseSort('title')}}>Title</th>
                    <th onClick={()=> {this.raiseSort('genre.name')}}>Genre</th>
                    <th onClick={()=> {this.raiseSort('numberInStock')}}>Stock</th>
                    <th onClick={()=> {this.raiseSort('dailyRentalRate')}}>Rate</th>
                    <th>Like</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                    <MovieItem 
                        key={movie._id} 
                        movie={movie} 
                        handleLike={handleLike} 
                        handleDelete={handleDelete} 
                    />
                    ))}
                </tbody>
            </table>
        );
    }
}
 
export default MovieTable;
 