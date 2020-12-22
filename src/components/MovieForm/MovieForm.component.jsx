import React from 'react';
import Joi from 'joi-browser'
import Form from '../Form/Form.component'
import {getGenres} from '../../services/genreService'
import {getMovie, saveMovie} from '../../services/movieService'
import { toast } from 'react-toastify';

class MovieForm extends Form {
    state = { 
        data : {
            title : '',
            genre_id : '',
            numberinstock : '',
            dailyrentalrate : '',
        },
        genres : [],
        errors : {}
    }
    schema = {
        id : Joi.number(),
        title : Joi.string().min(2).required().label('Title'),
        genre_id : Joi.number().required().label('Genre'),
        numberinstock : Joi.number().required().min(0).max(100).label('Number in Stock'),
        dailyrentalrate : Joi.number().required().min(250).max(1000).label('Daily Rental Rate')
    }
    populateGenres = async () => {
        const {data} = await getGenres()
        this.setState({genres : data})
    }
    populateMovie = async () => {
        try {
            const movieId = this.props.match.params.id;
            if(movieId === 'new') return;
            const {data : movie} = await getMovie(movieId)
            this.setState({ data : this.mapToViewModel(movie) })
        } catch (error) {
            if(error.response.status === 404) 
                this.props.history.replace('/not-found')
        }
    }
    async componentDidMount() {
        this.populateGenres()
        this.populateMovie()
    }
    mapToViewModel(movie) {
        return {
            id : movie.id,
            title : movie.title,
            genre_id : movie.genre_id,
            numberinstock : movie.numberinstock,
            dailyrentalrate : movie.dailyrentalrate
        }
    }
    doSubmit = async () => {
        try {
            await saveMovie(this.state.data)
        } catch (error) {
            if(error.response.status === 400)
                return toast.error('Authentication Error : You need to login first to delete the movie!!!')     
        }
        this.props.history.push('/movies') 
    }

    render() { 
        return ( 
            <div>
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('title','Title')}
                    {this.renderSelect('genre_id','Genre', this.state.genres)}
                    {this.renderInput('numberinstock','Number in Stock', 'number')}
                    {this.renderInput('dailyrentalrate','Rate','number')}
                    {this.renderButton('save')}
                </form>
            </div>
         );
    }
}

export default MovieForm;