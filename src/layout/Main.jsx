import React from 'react'
import Movies from '../components/Movies'


const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            loading: true
        }
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=star trek`)
            .then((response) => {
                return response.json();
            })
            .then((data) => this.setState({ movies: data.Search, loading: false }));
    }

    render() {
        const { movies, loading } = this.state;
        
        return <main>
           <Movies movies={movies} /> 
        </main>
    }

}

export default Main