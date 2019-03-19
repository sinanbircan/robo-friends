import React, {Component} from "react";

export class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        };
    }

    componentDidCatch() {
        this.setState({hasError: true});
    }

    render() {
        return (
            this.state.hasError
                ? <h1>Opps. There is a problem waiting to be resolved</h1>
                : this.props.children
        )
    }
}