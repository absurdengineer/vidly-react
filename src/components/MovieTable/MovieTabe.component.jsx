import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import Like from '../Like/Like.component'
import Table from '../Table/Table.component';
import auth from '../../services/authService'

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
    ] 

    deleteColumn = {
        key : 'delete', content : movie => <button
        onClick={() => this.props.handleDelete(movie)}
        className="btn btn-danger"
        >
        Delete
        </button>
    }

    constructor() {
        super()
        const user = auth.getCurrentUser()
        if(user && user.isadmin)
            this.columns.push(this.deleteColumn)
    }

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
 