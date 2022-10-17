import React from 'react'
import Movies from '../components/Movies'

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            loading: true
        }
    }

    render() {
        return <main>
           <Movies />
        </main>
    }

}

export default Main