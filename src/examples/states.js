const root = document.getElementById("root");

class Car extends React.Component{
    constructor(props){
        super(props);
        this.changeColor = this.changeColor.bind(this);

        this.state = {
            marka: 'Opel',
            model: 'Astra',
            renk: 'kirmizi',
            yil: 2021
        }
    }
    changeColor(){
        this.setState({
            renk: 'mavi'
        });
    }
    render(){
        return(
            <div>
                <h1>{this.state.marka} - {this.state.model}</h1>
                <p>{this.state.renk}</p>
                <button onClick={this.changeColor}>Change Color</button>
            </div>
        );
    };
}


ReactDOM.render(<Car/>,root);