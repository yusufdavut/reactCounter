const root = document.getElementById("root");

class App extends React.Component {
    onFormSubmit(e){
        e.preventDefault(); // Form submit olayını iptal eder. Default ayar.
        const item = e.target.elements.itemText.value.trim();
        console.log(item);
    }
    render() {
        
        return (
            <div>
                <h1>{this.props.title}, {this.props.desc}</h1>    

                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="itemText"/>    
                    <input type="submit" value="Ekle"/>
                </form>            
            </div>
        )
    }
}

class Navbar extends React.Component{

    // Eğer metot içinde this kullanılacaksa tekrardan geri getirilmesi gerekir. constructor kullanılmalı. 
    constructor(props){
        super(props);
        this.clickEvent = this.clickEvent.bind(this);
    }
    clickEvent(){
        console.log("OK");
        console.log(this);
    }
    render(){
        return(
            <div>
                <ul>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                </ul>
                <button onClick={this.clickEvent}>TIKLA</button>
            </div>
        )
    }
}

const list ={
    title: "Merhaba",
    desc: "Dünya"
}

let template = (
    <div className="container">
        <Navbar/>
        <App title={list.title} desc={list.desc} />
    </div>
);

ReactDOM.render(template, root);