import React, {Component} from 'react'
import TableBody from '../TableBody/TableBody.component';
import TableHeader from '../TableHeader/TablleHeader.component';
import Button from '../Button/Button.component'
import Like from '../Like/Like.component'

class MovieTable extends Component {
    columns = [
        {path : 'title', label : 'Title'},
        {path : 'genre.name', label : 'Genre'},
        {path : 'numberInStock', label : 'Stock'},
        {path : 'dailyRentalRate', label : 'Rate'},
        {key : 'like', content : movie => <Like 
        liked={movie.liked}
        movie={movie}
        handleLike={this.props.handleLike}
        />},
        {key : 'delete', content : movie => <Button
        onClick={() => this.props.handleDelete(movie)}
        className="btn btn-danger"
        >
        Delete
        </Button>}
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
                <TableBody
                    columns={this.columns} 
                    data={movies} 
                    handleLike={handleLike} 
                    handleDelete={handleDelete} 
                />
            </table>
        );
    }
}
 
export default MovieTable;
 