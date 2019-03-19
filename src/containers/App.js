import React, {Component} from "react";
import "./App.css"
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import {ErrorBoundary} from "../components/ErrorBoundary";
import { setSearchField } from "../actions";
import {connect} from "react-redux";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: []
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(response => this.setState({robots: response}));
    }

    render() {
        const {robots} = this.state;
        const {searchInput, onSearchChange} = this.props;

        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchInput.toLowerCase()));

        return (
            <div className={"tc"}>
                <h1 className={"title f1"}>Hurdy Gurdy</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    searchInput: state.searchInput
})

const mapDispatchToProps = (dispatch) => ({
    onSearchChange: event => dispatch(setSearchField(event.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);