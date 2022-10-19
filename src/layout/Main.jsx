import React, {useState, useEffect} from 'react'
import Preloader from '../components/Preloader'
import Movies from '../components/Movies'
import Search from '../components/Search'


const API_KEY = process.env.REACT_APP_API_KEY;
const baseSearch = `https://www.omdbapi.com/?apikey=${API_KEY}`;
let defaultMovie = 'star trek';

function Main() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const newSearch = (search, type) => {
        setLoading(true);
        if (search) {
            defaultMovie = search;
        }
        fetch(`${baseSearch}&s=${search ? search : defaultMovie}${type ? `&type=${type}` : ''}` )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            });
    }

    useEffect(() => {
        fetch(`${baseSearch}&s=${defaultMovie}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            });
    },[]);

   

    return (
        <main className='container content'>
            <Search newSearch={newSearch} />
            {
                loading ? (
                    <Preloader />
                ) : <Movies movies={movies} />
            }
        </main>
    );
}

export default Main