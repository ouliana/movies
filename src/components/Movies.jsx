import Movie from './Movie'

function Movies(props) {
    const { movies } = props;
    
    return <div className='movies'>
        {
            movies ? movies.map(movie => (
                    <Movie key={movie.imdbID} {...movie} />
                )) : <h4>Movie not found!</h4>
             }
         </div>
}

export default Movies