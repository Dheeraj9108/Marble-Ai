import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';

const Card = ({myData}) => {
    const {title,body,id} = myData;






    const [inputText,setInputText] = useState('');
    const [detectLanguageKey,setDetectLanguageKey] = useState('');

    const {lang} = useSelector((state)=>state.sred)

    const getLanguageSource =()=>{
        axios.post(`https://libretranslate.de/detect`,{
            q:inputText
        }).then((res)=>{
            setDetectLanguageKey(res.data[0].language);
        })
    }
    const translateText=(data)=>{
        getLanguageSource();
        let info = {
            q : data,
            source:detectLanguageKey,
            target :lang,
        }
        axios.post(`https://libretranslate.de/translate`,info).then((res)=>{
            console.log(res.data.translatedText)
            setInputText(res.data.translatedText);
            
        })
        return inputText;
    }
















    return (
        <li className="nav-item">
            <a className="nav-link" href="/">
                <div className="card">
                    <div className="card-header" style={{fontSize:"20px" , textTransform:"uppercase"}} >
                        {id}<strong>{title}</strong> 
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{body.substr(0,150)}</h5>
                        <p className="card-text">{body.substr(0,50)}</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </a>
        </li>
    )
}

export default Card
