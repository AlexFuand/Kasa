import './banner.scss';

function Banner ({img ,text}){
    return (
        <div className="banner">
            <img className="banner__img" src={img} alt="Banner"/>
            <div className="banner__background"></div>
                {text ? <h1 className="banner__text">{text}</h1> : null}
        </div>
    )
}

export default Banner