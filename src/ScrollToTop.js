import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }

        // Reload the page when user click twice on some link
        if (this.props.location.pathname === prevProps.location.pathname) {
            window.location.reload();
        }
    }

    render() {
        return this.props.children;
    }
}

export default withRouter(ScrollToTop);
