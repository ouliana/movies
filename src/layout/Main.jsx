import React from 'react'
import Preloader from '../components/Preloader'
import Movies from '../components/Movies'
import Search from '../components/Search'


const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            loading: true,
            last: 'star trek'
        }
        this.baseSearch = `https://www.omdbapi.com/?apikey=${API_KEY}`
    }

    componentDidMount() {
        fetch(`${this.baseSearch}&s=${this.state.last}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => this.setState({ movies: data.Search, loading: false }));
    }

    newSearch = (search, type) => {
        this.setState({ loading: true })
        if (search) {
            this.setState({ last: search })
        }
        fetch(`${this.baseSearch}&s=${search ? search : this.state.last}${type ? `&type=${type}` : ''}` )
            .then((response) => {
                return response.json();
            })
            .then((data) => this.setState({movies: data.Search, loading:false}));
    }

    render() {
        const { movies, loading } = this.state;
        
        return <main className='container content'>
            <Search newSearch={this.newSearch}/>
            {
                loading ? (
                    <Preloader />
                ) : <Movies movies={movies} /> 
            }
        </main>
    }

}

export default Main