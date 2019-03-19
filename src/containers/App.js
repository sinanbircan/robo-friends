import React, {Component} from "react";
import "./App.css"
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import {ErrorBoundary} from "../components/ErrorBoundary";

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: "",
            robots: []
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(response => this.setState({robots: response}));
    }

    onSearchChange = (event) => {
        this.setState({
            searchInput: event.target.value
        });
    };

    render() {
        const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchInput.toLowerCase()));

        return (
            <div className={"tc"}>
                <h1 className={"title f1"}>Hurdy Gurdy</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;