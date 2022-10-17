function Movie(props) {
    const {
        imdbID, 
        Poster: poster, 
        Title: title, 
        Type: type, 
        Year: year
    } = props;
    
    return <div id={imdbID} className="card">
                <div className="card-image waves-effect waves-block waves-light">
                {
                    poster === 'N/A' ? <img className="activator" src={`https://via.placeholder.com/300x450?text=${title}`} alt=""/>
                    : <img className="activator" src={poster} alt=""/>
                }
                
                </div>
                <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}</span>
                <p>{type} <span className="right">{year}</span></p>
                </div>
        </div>
}

export default Movie