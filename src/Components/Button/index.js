import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './style.scss';
//import RangeButton from '../RangeButton';
import CopyButton from '../CopyButton';

class ButtonGenarate extends React.Component{
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
                <div className='wrapper-column'>
                    <div className='wrapper-row'>
                        <p id="passwordValue">{this.state.password}</p>
                        <CopyButton />
                    </div>
                    <Button className="button button--genarete-password" variant="primary" onClick={this.randomPassword}>Gerar senha</Button>
                </div>
            </div>
        )
    }
}
export default ButtonGenarate;