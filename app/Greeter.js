import React,{Component} from 'react';
import styles from './Greeter.css'

class Greeter extends Component{
    constructor(){
        super();
        this.state = {
            "txt":"nihao"
        }
    }

    handleClick(){
        this.setState({
            txt:'tahao'
        })
    }

    render(){
        const {txt} = this.state;
        return(
            <div className = {styles.root}>
               {txt}
               <button onClick = {this.handleClick.bind(this)}>click me</button>
            </div>
        )
    }
}

export default Greeter;