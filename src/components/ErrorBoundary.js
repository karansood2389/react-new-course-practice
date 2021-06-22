import  { Component } from 'react';

class ErrorBoundary extends Component {
    constructor (props) {
        super(props);
        this.state = {
            hasError: false,
            error: null
        }
    }

    componentDidCatch = (error) => {
        this.setState({
            hasError: true,
            error
        })
    }

    render () {
        if (this.state.hasError) {
            return <p>Something Went Wrong.</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
