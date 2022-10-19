import React, {useState} from 'react';

const Search = (props) => {
    const {
        newSearch = Function.prototype,
    } = props

    const [search, setSearch] = useState('');
    const [type, setType] = useState('');

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            newSearch(search, type);
        }
    };

    const handleOnChange = (event) => {
        setType(event.target.dataset.type);
        newSearch(search, event.target.dataset.type);
     }

    return (
            <div className='row'>
                <div className='input-field col s12'>
                    <input
                        className='validate'
                        placeholder='Search'
                        id='search'
                        type='text'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKey}
                    />

                    <button
                        onClick={() => newSearch(search, type)}
                        className='btn lime search-btn'
                    >
                        <i className='material-icons'>search</i>
                    </button>
                </div>
                <div>
                    <label>
                        <input
                            name='type'
                            type='radio'
                            data-type=''
                            onChange={handleOnChange}
                            checked={type === ''}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                           name='type'
                            type='radio'
                            data-type='movie'
                            onChange={handleOnChange}
                            checked={type === 'movie'}
                        />
                        <span>Movies</span>
                    </label>
                    <label>
                        <input
                            name='type'
                            type='radio'
                            data-type='series'
                            onChange={handleOnChange}
                            checked={type === 'series'}
                        />
                        <span>Series</span>
                    </label>
               </div>
            </div>
        );
}

export default Search;
