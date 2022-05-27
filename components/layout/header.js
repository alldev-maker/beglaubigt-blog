import Link from "next/link";

const Header = () => (
  <header className="header-navbar">
    <nav className="navbar navbar-expand-lg">
      <Link href="/">
        <a className="navbar-brand">
          <h4>
            <b>beglaubigt</b>.de
          </h4>
        </a>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i></i>
        <i></i>
        <i></i>
      </button>

      <div className="nav-contact">
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item nav-item-translate dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="translatemenu"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="/images/austria.svg"
                  className="icon-translate"
                  width="20"
                />
                <img src="/images/translate.png" width="17" /> [AT]
              </a>
              <div className="dropdown-menu" aria-labelledby="translatemenu">
                <div className="dropdown-container">
                  <a href="#" className="dropdown-items dropdown-items-small ">
                    <i className="icon-box">
                      <img src="/images/austria.svg" width="31" />
                    </i>
                    Österreich
                  </a>
                  <a href="#" className="dropdown-items dropdown-items-small ">
                    <i className="icon-box">
                      <img src="/images/germany-icon.svg" width="31" />
                    </i>
                    Deutschland <strong>Bald verfügbar</strong>
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../ablauf.html">
                WIE FUNKTIONIERT&apos;S
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="solutionmenu"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                LÖSUNGEN
              </a>
              <div className="dropdown-menu" aria-labelledby="solutionmenu">
                <div className="dropdown-container">
                  <a
                    href="./immobilien-vertrag.html"
                    className="dropdown-items"
                  >
                    <i className="icon-box">
                      <img src="/images/icon/nav-house.png" width="31" />
                    </i>
                    <div className="dropdown-item-info">
                      <h3>Kaufverträge Immobilien</h3>
                      <p>
                        Immobilienverträge online abschließen und notariell
                        beglaubigen lassen
                      </p>
                    </div>
                    <span className="nav-link-arrow">Mehr </span>
                  </a>
                  <a href="#" className="dropdown-items">
                    <i className="icon-box">
                      <img
                        src="/images/icon/nav-office-building.png"
                        width="31"
                      />
                    </i>
                    <div className="dropdown-item-info">
                      <h3>Unternehmensgründungen</h3>
                      <p>
                        Jegliche Art von Unternehmen Online gründen und
                        notariell abschließen
                      </p>
                    </div>
                    <span className="nav-link-arrow">Mehr </span>
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./kontakt.html">
                KONTAKT
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="./gebuehren.html">
                GEBÜHREN
              </a>
            </li>
          </ul>
        </div>
        <ul className="navbar-contact">
          <li>
            <div className="star-each">
              <img src="/images/rating-new.svg" alt="" />
            </div>
          </li>
          <li>
            <div className="phone">
              <div className="phone-img">
                <img src="/images/phone-receiver-silhouette.svg" alt="" />
              </div>
              <a href="tel:+43316722215">
                {" "}
                <p>(+43) 316 722 215</p>
              </a>
            </div>
          </li>
          <li>
            <a href="../funnel.html" className="solid-fill">
              AUSPROBIEREN
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
