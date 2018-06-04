import React , { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
    constructor(props){
        super(props);


        this.state = {
            //Manage Application State here
            currentScreen:'',
            previousScreen:'',
            matches:[],
            stadiumLocations:[],     
            
        };

    };

    render(){
        return(
            <div>hi</div>
        );
    }
   
}

ReactDOM.render(<App />, document.querySelector('.root'));