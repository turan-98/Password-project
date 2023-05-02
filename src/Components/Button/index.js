import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './style.scss';
import RangeButton from '../RangeButton';
import CopyButton from '../CopyButton';

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
                    <div className='d-flex-row'>
                        <p id="passwordValue">{this.state.password}</p>
                        <CopyButton />
                    </div>
                    <RangeButton />
                    <Button variant="primary" onClick={this.randomPassword}>Gerar senha</Button>
                </div>
            </div>
        )
    }
}

export default Btn;