const root = document.getElementById("root");

class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.plusBtn = this.plusBtn.bind(this);
        this.minusBtn = this.minusBtn.bind(this);
        this.resetBtn = this.resetBtn.bind(this);

        this.state={
            number: 0
        }
    }

    plusBtn(){
        this.setState((prevState) => {
            return{
                number: prevState.number + 1
            };
        })
    }

    minusBtn(){
        this.setState((prevState) => {
            return{
                number: prevState.number - 1
            };
        })
    }
    resetBtn(){
        this.setState({
            number: 0
        });
    }

    render(){
        return(
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.plusBtn}>+1</button>
                <button onClick={this.minusBtn}>-1</button>
                <button onClick={this.resetBtn}>Reset</button>
            </div>
        );
    };
}


ReactDOM.render(<Counter/>,root);