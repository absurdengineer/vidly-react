import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button.component'
import Like from '../Like/Like.component'
import Table from '../Table/Table.component';

class MovieTable extends Component {
    columns = [
        {path : 'title', label : 'Title', content : movie => <Link to={`/movies/${movie.id}`} >{movie.title}</Link>},
        {path : 'genre_id', label : 'Genre'},
        {path : 'numberinstock', label : 'Stock'},
        {path : 'dailyrentalrate', label : 'Rate'},
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
 