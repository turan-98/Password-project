import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './style.css';

class Btn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            password:'',
        };
    }

    randomPassword = () => {
        var characters = "ABCDf#gnoEFGHI@JKpqrstu%vwx&yzLM*NOP=QRShi+klmTUVWXTZabcde";  
        var pass = 2;
        var randomString = '';

        for(var i = 0; i < 16; i++){
            pass = Math.floor(Math.random() * characters.length);
            randomString += characters.substring(pass, pass + 1);
            console.log(pass)
        }

        this.setState({
            password:randomString.toString(),
        })
    }

    render(){
        return (
            <div className='wrapper'>
                <p>{this.state.password}</p>
                <input type="range" id="volume" min="0" max="50"/>
                <Button variant="primary" onClick={this.randomPassword}>Gerar senha</Button>
            </div>
        )
    }
}

export default Btn;