import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './style.css';
//import RangeButton from '../RangeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
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
                    <div className='wrapper-text-generated'>
                        <p className='text-right w-75 mt-3' id="passwordValue">{this.state.password}</p>
                        <Button className="button button--genarete-password" variant="primary" onClick={this.randomPassword}>
                            <FontAwesomeIcon icon={faArrowRotateLeft} />
                        </Button>
                    </div>
                    <CopyButton />
                </div>
            </div>
        )
    }
}
export default ButtonGenarate;