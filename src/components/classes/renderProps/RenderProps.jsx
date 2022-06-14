import React, { Component } from 'react';

class RenderProps extends Component {
    render() {
        return (
            <>
                <h1>Move the mouse around!</h1>
                <MousePointer height="50vh" bg="darkgray" render={mouse => (
                    <Cat mouse={mouse} />
                )} />
            </>
        );
    }
}

class MousePointer extends Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: this.props.height, background: this.props.bg }} onMouseMove={this.handleMouseMove}>
                {/* <p>The current mouse position is (x: {this.state.x}, y: {this.state.y})</p> */}
                {/* <Cat mouse={this.state} /> */}
                {this.props.render(this.state)}
            </div>
        );
    }
}

class Cat extends Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src="https://icon-library.com/images/bat-icon-png/bat-icon-png-23.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y, width: '50px' }} />
        );
    }
}

export default RenderProps;