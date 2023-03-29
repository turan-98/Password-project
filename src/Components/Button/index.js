import React from 'react';

class Button extends React.Component{
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
                <button onClick={this.randomPassword}>Teste</button>
            </div>
        )
    }
}

export default Button;