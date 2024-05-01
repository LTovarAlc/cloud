import "./header.css"

const Header = () => {
    return(
        <header className="header">
            <div className="logo-container">

            </div>
            <div className="header-buttons__container">
                <button className="header-button"><img src="../../../../imgs/usuario.png" className="header-button__icon" /></button>
                <button className="header-button"><img src="../../../img/caret-abajo.png" className="header-button__icon" /></button>
            </div>
        </header>
    )
}

export default Header