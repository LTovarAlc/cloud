import SearchBar from "../searchBar/searchBar"
import "./header.css"

const Header = () => {
    return(
        <header className="header">
            <img src="../../../img/cloudLogo.png" alt="" className="cloud-logo"/>
            <SearchBar/>
            <div className="header-buttons__container">
                <button className="header-button"><img src="../../../../img/usuario.png" className="header-button__icon" /></button>
                <button className="header-button"><img src="../../../img/caret-abajo.png" className="header-button__icon" /></button>
            </div>
        </header>
    )
}

export default Header