import './style.css';
import React, {useState} from "react";
import partyPopper from "./img/party-popper.png"

export default function CopyButton() {

const onClick = (event) =>{
    handleToggle();
    handleCopy();
}
const [isActive, setActive] = useState("false");
const handleToggle = () =>{
    setActive(!isActive);
}

 function handleCopy(props){
    var $copyText = document.querySelector('#passwordValue').innerHTML;
    if($copyText.length > 0){
        navigator.clipboard.writeText($copyText);
    }else{
       alert('nada a copiar')
    }
 } 
return (
        <>
        {/*
        <div className={isActive ? "-none" : "active--popup"}>
            <div className='wrapper-copy'>
                <p>Copied</p><img src={partyPopper} width={20} height={20} alt="Party Popper"/>
            </div>
        </div>
        */}
        <button className="button button--copy" onClick={onClick} alt="Botão de copiar">
            Copy
        </button>
        
        <p ></p>
        </>
    )
 
}

