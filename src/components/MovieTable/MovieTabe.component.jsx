import React, {Component} from 'react'
import MovieItem from '../MovieItem/MovieItem.component';
import TableHeader from '../TableHeader/TablleHeader.component';

class MovieTable extends Component {
    columns = [
        {path : 'title', label : 'Title'},
        {path : 'genre.name', label : 'Genre'},
        {path : 'numberInStock', label : 'Stock'},
        {path : 'dailyRentalRate', label : 'Rate'},
        {key : 'like'},
        {key : 'delete'}
    ]

    render() { 
        const {movies, handleLike, handleDelete, sortColumn, handleSort} = this.props
        return ( 
            <table className="table">
                <TableHeader 
                    columns={this.columns} 
                    sortColumn={sortColumn} 
                    handleSort={handleSort} 
                />
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
 