import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './style.scss';
import RangeButton from '../RangeButton';

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
        }

        this.setState({
            password:randomString.toString(),
        })
    }
    

    render(){
        return (
            <div className='wrapper'>
                <div className='d-flex-column'>
                    <p>{this.state.password}</p>
                    <RangeButton />
                    <Button variant="primary" onClick={this.randomPassword}>Gerar senha</Button>
                </div>
            </div>
        )
    }
}

export default Btn;