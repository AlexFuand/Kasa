import React from 'react';
import {useState} from 'react';
import collapseArrow from '../../assets/collapseArrow.svg'
import './collapse.scss'

function Collapse({title, text}){
    const [open, setOpen] = useState(false)
    return (
        <div className="collapse__gen">
            <div className="collapse__content">
                <div className="collapse__title">{title}</div>
                <img src={collapseArrow}  alt="Ouvre la fenêtre" className={`collapse__img ${open}`} onClick = {() => setOpen(!open)} />
            </div>
            {
                open && <div className="collapse__text">{text}</div>
            }
        </div>
    )
}

export default Collapse;