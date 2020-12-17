import React, {Component} from 'react'
import Button from '../Button/Button.component'
import Like from '../Like/Like.component'
import Table from '../Table/Table.component';

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
        const {movies, sortColumn, handleSort} = this.props
        return ( 
                <Table 
                    columns={this.columns} 
                    sortColumn={sortColumn} 
                    handleSort={handleSort} 
                    data={movies}
                />

        );
    }
}
 
export default MovieTable;
 