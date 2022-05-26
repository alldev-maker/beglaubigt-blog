import React from "react";

const Footer = () => (
  <footer>
    <div className="footer-flex">
      <div className="footer-link">
        <ul className="d-none d-lg-block link-list">
          <h3>Kontakt</h3>
          <li>
            <a href="../kontakt.html">
              <p> Kontakt Aufnehmen</p>{" "}
            </a>
          </li>
          <li>
            <a href="mailto:info@beglaubigt.de">Per Email</a>
          </li>
          <li>
            <a href="43316722215">Per Rückruf</a>
          </li>
          <li>
            <a href="https://beglaubigt.de"> beglaubigt.de © 2022</a>
          </li>
        </ul>
        <ul className="link-list">
          <h3>Lösungen</h3>
          <li>
            <a href="../ablauf.html">Allgemeiner Ablauf</a>
          </li>
          <li>
            <a href="../immobilien-vertrag.html">
              Immobilienverträge beglaubigen
            </a>
          </li>
          <li>
            <a href="../gruendung.html">Unternehmensgründung</a>
          </li>
          <li>
            <a href="#">
              Ratgeber <span className="badge badge-signiert">BALD</span>
            </a>
          </li>
        </ul>
        <ul className="link-list">
          <h3>Unternehmen</h3>
          <li>
            <a href="../ueber.html">Über Uns</a>
          </li>
          <li>
            <a href="../impressum.html">Impressum</a>
          </li>
          <li>
            <a href="../datenschutz.html">Datenschutz</a>
          </li>
          <li>
            <a href="#">Cookie Einstellungen</a>
          </li>
        </ul>
      </div>
      <div className="footer-address">
        <ul className="address-list">
          <h3>beglaubigt.de</h3>
          <li className="social-icons">
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-medium-m"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li>
            <p>
              beglaubigt.de ist ein österreichiges
              <br /> Unternehmen mit Firmensitz Wien.{" "}
            </p>
          </li>
          <li>
            <p>
              Oranienburger Str. 103,
              <br />
              10117 Berlin
            </p>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
