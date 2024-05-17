import { useState } from 'react';
import './slider.scss';
import arrow from '../../assets/collapseArrow.svg';

function Slider( {pictures} ){
    const [state, setState] = useState(0)

    const nextImg = () => {
        setState(state === pictures.length - 1 ? 0 : state + 1)
    }

    const prevImg = () => {
        setState(state === 0 ? pictures.length - 1 : state -1)
    }

    const resetImg = () => {
        setState(0)
    }

    return (
        <div className="display">
            <div className="display__img">
                <img src={pictures[state]} alt="slider"/>
                {pictures.length > 1 ? (
                    <>
                        <span className="display__reset" onClick={resetImg}>{state + 1}/{pictures.length}</span>
                        <div className='display__rightarrow'>
                            <img src={arrow} alt="Next" className="rightArrow" onClick={nextImg} />
                        </div>
                        <div className="display__leftarrow">
                            <img src={arrow} alt="Previous" className="leftArrow" onClick={prevImg} />
                        </div>
                    </>     
                ) : null}
            </div>
        </div>
    )
}

export default Slider;