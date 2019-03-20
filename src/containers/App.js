import React, {Component} from "react";
import "./App.css"
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import {ErrorBoundary} from "../components/ErrorBoundary";
import {requestRobots, setSearchField} from "../actions";
import {connect} from "react-redux";

class App extends Component {
    componentDidMount() {
        this.props.requestRobots();
    }

    render() {
        const {searchInput, onSearchChange, robots} = this.props;

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
    searchInput: state.searchReducer.searchInput,
    robots: state.requestRobotsReducer.robots
});

const mapDispatchToProps = (dispatch) => ({
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    requestRobots: () => dispatch(requestRobots())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);