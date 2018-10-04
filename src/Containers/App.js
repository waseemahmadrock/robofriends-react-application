import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll.js';
import './App.css';





//State >> props

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users })
            )
        // console.log("Check")
        // console.log("ComponentdidMount")
    }

    onSearchChange = (event) => {
        // console.log(event.target.value);
        this.setState({ searchfield: event.target.value })

    }

    render() {
        const { robots, searchfield } = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        // console.log("Render")
        return !robots.length ?
            (
                <div className='tc'>
                    <h1>Loading....</h1>
                </div>
            ) :
            (
                <div className='tc'>
                    <br />
                    <h1 className='f2 tc dib br3 pa3 ma2 grow bw2 shadow-5'>Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filterRobots} />
                    </Scroll>
                </div>
            );
    }
}

export default App;