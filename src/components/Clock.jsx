import React from "react";
import './clock.css';

class Clock extends React.Component {

    timerId = 0;

    constructor(props){
        super(props);
        this.state = {date: new Date(), day: true};
        console.log('constructor called!')
    }

    tick(){
        this.setState({
            date: new Date(),
            day: this.state.date <= 17
        });
    }

    componentDidMount(){
        console.log('componentDidMount called!');
        this.timerId = setInterval (() => {
            this.tick()
        }, 1000);
    }

    render() {
        console.log('render called!');
        return (
            <div className={`clock ${!this.state.day? 'night': ''}`}>
                <h1>Hello World!</h1>
                <h2>It's {this.state.date.toLocaleTimeString() }</h2>
            </div>    
        );    
    }

    componentDidUpdate() {
        if (this.state.day){
            console.log('Good morning!');
        } else {
            console.log('Good night!');
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }
}






// function Clock(props) {
// return (
//     <div>
//       <h1>Hello World!</h1>
//       <h2>It's {new Date().toLocaleTimeString() }</h2>
//     </div>
//     );
// }

export default Clock;