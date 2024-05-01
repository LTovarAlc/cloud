import "./sideNav.css"

const SideNav = () => {
    return(
        <aside className="sideNav">
            <ul className="sideNav-list">
                <div>
                    <h3 className="sideNav-section-title">Tendencias</h3>
                    <li className="sideNav-list__items">Los más comprados</li>
                    <li className="sideNav-list__items">Nuevos</li>
                    <li className="sideNav-list__items">Productos mas valorados</li>
                    <li className="sideNav-list__items">Cloud Primera edición</li>
                </div>
                <div>
                    <h3 className="sideNav-section-title">Programas</h3>
                    <li className="sideNav-list__items">Premium</li>
                    <li className="sideNav-list__items">Ofertas del día</li>
                    <li className="sideNav-list__items">Cupones</li>
                    <li className="sideNav-list__items">Regalos</li>
                </div>
                <div>
                    <h3 className="sideNav-section-title">Ayuda y configuración</h3>
                    <li className="sideNav-list__items">Mi cuenta</li>
                    <li className="sideNav-list__items">Cerrar sesión</li>
                    <li className="sideNav-list__items">Configuracion</li>
                </div>
            </ul>
        </aside>
    )
} 

export default SideNav