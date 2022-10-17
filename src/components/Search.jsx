import React from 'react';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
            type: ''
        };
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.newSearch(this.state.search, this.state.type);
        }
    };

    handleOnChange = (event) => {
        this.setState(() => ({ type: event.target.dataset.type }), () => {
            this.props.newSearch(this.state.search, this.state.type);
        });
     }

    render() {
        const { search, type } = this.state;
        const { newSearch } = this.props;

        return (
            <div className='row'>
                <div className='input-field col s12'>
                    <input
                        className='validate'
                        placeholder='Search'
                        id='search'
                        type='text'
                        value={search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleKey}
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
                            onChange={this.handleOnChange}
                            checked={type === ''}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                           name='type'
                            type='radio'
                            data-type='movie'
                            onChange={this.handleOnChange}
                            checked={type === 'movie'}
                        />
                        <span>Movies</span>
                    </label>
                    <label>
                        <input
                            name='type'
                            type='radio'
                            data-type='series'
                            onChange={this.handleOnChange}
                            checked={type === 'series'}
                        />
                        <span>Series</span>
                    </label>
               </div>
            </div>
        );
    }
}

export default Search;
