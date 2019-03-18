import React, {Component} from "react";
import "./App.css"
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

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
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;