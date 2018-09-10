// game: gambling system
// Welcome to Point Bunny...where everyone is a winner.
// Please place 50 points into the slot machine.

// function gamblingSystem(points) {
//     console.log("Welcome to Point Bunny...where everyone is a winner. Please place 50 points into the slot machine.");
//     //randomize win or lose
//     // const rand = Boolean(Math.round(Math.random())); //rand is 0 or 1.

//     const rand = (Math.round(Math.random())); //rand is between 0 or 1.
//     if (rand <= 0.2) {
//         const win = Math.floor(((Math.random() * Math.floor(points * 2))) + 50);
//         console.log("You won: " + win + " points.");
//     } else if (rand > 0.2 && rand <= 0.4) {
//         const win = Math.floor(((Math.random() * Math.floor(points))) + 50);
//         console.log("You won: " + win + " points.");
//     } else {
//         const lose = Math.floor(((Math.random() * Math.floor(points))));
//         console.log("You won: " + lose + " points.");


//     }
// }

// gamblingSystem(50);



import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.placeBet50 = this.placeBet50.bind(this);
        this.add1 = this.add1.bind(this);
        this.minus1 = this.minus1.bind(this);
        this.reset = this.reset.bind(this);
        this.gamblingSystem = this.gamblingSystem.bind(this);
        this.youWon = this.youWon.bind(this);
        this.state = {
            count: props.count
        };
    }

    componentDidMount() {
        try {
            const stringCount = localStorage.getItem("count");
            const count = parseInt(stringCount, 10);

            if (!isNaN(count)) {
                this.setState(() => ({ count }));
            }
        } catch (e) {
            //do nothing at all if JSON data invalid/null.
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem("count", this.state.count);
        }
    }
    componentWillUnmount() {
        console.log("Component will unmount.");
    }

    gamblingSystem(points) {
        //console.log("Welcome to Point Bunny...where everyone is a winner. Please place 50 points into the slot machine.");
        //randomize win or lose
        // const rand = Boolean(Math.round(Math.random())); //rand is 0 or 1.

        const rand = (Math.round(Math.random())); //rand is between 0 or 1.
        let win = 0;
        if (rand <= 0.1) {
            win = Math.floor(((Math.random() * Math.floor(points * 2))) + 50);
            //console.log("You won: " + win + " points.");
        } else if (rand > 0.1 && rand <= 0.4) {
            win = Math.floor(((Math.random() * Math.floor(points))) + 50);
            //console.log("You won: " + win + " points.");
        } else {
            win = Math.floor(((Math.random() * Math.floor(points))));
            //console.log("You won: " + lose + " points.");
        }
        return win;

    }


    placeBet50() {
        let youWon = this.gamblingSystem(50);
        this.setState(prevState => {

            return {

                count: prevState.count + youWon - 50
            };
        });
        console.log(this.state.count);
    }

    add1() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            };
        });
        console.log(this.state.count);
    }
    minus1() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            };
        });
        console.log(this.props.minus1);
    }
    reset() {
        this.setState(prevStateate => {
            return {
                count: 0
            };
        });
        console.log(this.props.reset);
    }
    render() {
        return (
            <div>
                <h1> Welcome to Point Bunny... where everyone is a winner.
                 Please place 50 points into the slot machine.</h1>
                <h1>You won: {this.youWon}</h1>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.placeBet50}>50 points</button>
                <button onClick={this.add1}>+1</button>
                <button onClick={this.minus1}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div >
        );
    }
}
Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter />, document.getElementById("app"));


