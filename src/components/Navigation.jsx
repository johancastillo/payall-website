

const Navigation = () => {
    return(
        <header className="header" id="header">
  <span className="burguer-button" id="burguer-button">
    <i className="fa fa-bars" aria-hidden="true" />
  </span>
  <nav className="menu">
    <ul className="header-number">
      <li className="item-number">
        <img src="img/PAYALL%20LOGO.svg" alt="" />
      </li>
      <li className="item-number">
        <i className="fa fa-phone fa-fw" />recarga
        <span>
          (+58)(281) 500.2150
        </span>
      </li>
    </ul>
    <ul>
      <li>
        <a href="#nosotros" className="u-item ui-header">
          <i className="fa fa-users fa-fw u-iconcolor" aria-hidden="true" />
          Nosotros
        </a>
      </li>
      <li>
        <a href="#productos" className="u-item ui-header">
          <i className="fa fa-desktop fa-fw u-iconcolor" aria-hidden="true" />
          Productos
        </a>
      </li>
      <li>
        <a href="#ventajas" className="u-item ui-header">
          <i className="fa fa-thumbs-up fa-fw u-iconcolor" aria-hidden="true" />
          Ventajas
        </a>
      </li>
      <li className="u-item">
        <a href="#aliados" className="u-item ui-header">
          <i className="fa fa-shopping-cart fa-fw u-iconcolor" aria-hidden="true" />
          Aliados
        </a>
      </li>
      <li>
        <a href="#contactanos" className="u-item ui-header">
          <i className="fa fa-envelope-o u-iconcolor" aria-hidden="true" />
          Contáctanos</a>
      </li>
      <li>
        <a href="https://panel.payall.com.ve" target="_blank" className="u-item ui-header">
          <i className="fa fa-users fa-fw" aria-hidden="true" />
          Acceso
        </a>
      </li>
    </ul>
  </nav>
</header>

    )
}

export default Navigation

