import React, { Component } from "react"
import _ from 'lodash'
import { getMovies } from "../../services/fakeMovieService"
import Pagination from "../../components/Pagination/Pagination.component"
import {paginate} from '../../components/Pagination/paginate.utils'
import Genres from "../../components/Genres/Genres.component";
import { getGenres } from "../../services/genreService"
import MovieTable from "../../components/MovieTable/MovieTabe.component"
import SearchBox from "../../components/SearchBox/SearchBox.component"

class Movies extends Component {
  state = {
    movies: [],
    genres : [],
    pageSize : 4,
    currentPage : 1,
    currentGenre : '',
    searchQuery : '',
    sortColumn : {path : 'title', order : 'asc'}
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id)
    this.setState({ movies });
  }
  handleLike = movie => {
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    movies[index] = {...movies[index]}
    movies[index].liked = !movies[index].liked
    this.setState({movies})
  }
  handlePageChange = pageNumber => {
    this.setState({currentPage : pageNumber})
  }
  handleSelect = genre => {
    this.setState({currentGenre : genre})
    this.setState({searchQuery : '' })
    this.setState({currentPage : 1})
  }
  handleSort = sortColumn => {
    this.setState({sortColumn})
  }
  handleSearch = query => {
    this.setState({searchQuery : query, currentGenre : null, currentPage : 1})
  }
  getPageData = () => {
    const {
      currentPage, 
      currentGenre, 
      pageSize, 
      sortColumn, 
      searchQuery, 
      movies : allMovies 
    } = this.state
    let filtered = allMovies
    if(searchQuery!=='')
      filtered = allMovies.filter(m=> 
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
        )
    else if(currentGenre && currentGenre.id)
        filtered = allMovies.filter(m => m.genre.id === currentGenre.id)

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
    const movies =  paginate(sorted, currentPage, pageSize)
    return {totalCount : filtered.length, data: movies}
  }
  async componentDidMount() {
    const {data} = await getGenres()
    const genres = [...data]
    this.setState({
      movies : getMovies(), 
      genres 
    })
  }

  render() {
    const {history} = this.props
    const { length: count } = this.state.movies
    
    if (!count) return <h4>There are no movies in the database.</h4>
    const {
      currentPage, 
      currentGenre, 
      pageSize, 
      genres,
      sortColumn, 
      searchQuery
    } = this.state
    const {totalCount, data} = this.getPageData()

    return (
      <div className="row">
        <div className="col-3">
          <Genres 
            genres={genres} 
            onItemSelect={this.handleSelect} 
            currentGenre={currentGenre}
          />
        </div>
        <div className="col">
          <button className='btn btn-primary btn-lg' onClick={ () => history.push('/movies/new')}>New Movie</button>
          <SearchBox value={searchQuery} placeholder='Search by Title...' onChange={this.handleSearch} />
          <h4 className='mt-3'>Showing {totalCount} movies in the database.</h4>
          <MovieTable 
            movies={data} 
            sortColumn={sortColumn}
            handleLike={this.handleLike} 
            handleDelete={this.handleDelete} 
            handleSort={this.handleSort} 
          />
          <Pagination 
            itemCount={totalCount} 
            currentPage={currentPage} 
            pageSize={pageSize} 
            onPageChange={this.handlePageChange} 
          />
        </div>
      </div>
    );
  }
}

export default Movies