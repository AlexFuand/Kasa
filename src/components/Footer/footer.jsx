import logo from '../../assets/LOGOLogoWhite.svg'
import './footer.scss'

function Footer (){
    return (
        <footer>
            <div className = "footer__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className = "footer__rights">
                <h3>© 2020 Kasa. All rights reserved</h3>
            </div>
        </footer>
    )
}

export default Footer