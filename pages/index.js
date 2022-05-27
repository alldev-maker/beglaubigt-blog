import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-pr">
              <h1>
                Dokumente zu 100% online unterzeichnen und notariell beglaubigen
              </h1>
              <p className="description">
                Unterzeichnen Sie Dokumente elektronisch und stellen Sie von
                jedem Gerät aus eine Verbindung zu einem Live-Notar her.
                Erstmalig in Österreich 24x7 verfügbar.
              </p>
              <Link href="/funnel">
                <a className="solid-fill">AUSPROBIEREN</a>
              </Link>
              <p>
                <span>100% Geld-Zurück-Garantie</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="media-known">
          <p>Bekannt aus den Medien</p>
          <ul className="media-list">
            <li className="expatica">
              <img src="/images/batch-001-cropped.png" alt="expatica" />
            </li>
            <li className="the-local">
              <img src="/images/batch-002-cropped.png" alt="the-local" />
            </li>
            <li className="immobilien-scout24">
              <img
                src="/images/batch-003-cropped.png"
                alt="immobilien-scout24"
              />
            </li>
            <li className="neubau-kompass">
              <img src="/images/batch-004-cropped.png" alt="neubau-kompass" />
            </li>
          </ul>
        </div>

        <div className="title">
          <h2>Wie funktioniert es</h2>
          <p>
            Unterzeichnen Sie Dokumente elektronisch und stellen Sie von jedem
            Gerät au
          </p>
        </div>

        <div className="row">
          <div className="col-2 col-sm-4"></div>
          <div className="col-10 col-sm-8">
            <ul className="point-list">
              <li>
                <h3 data-num="1">Dokument hochladen</h3>
                <p>
                  Nach erfolgreicher Anmeldung können Sie ganz einfach die Art
                  der Beglaubigung auswählen und die dazugehörigen Dokumente
                  hochladen.
                </p>
              </li>
              <li>
                <h3 data-num="2">Identität verifizieren</h3>
                <p>
                  Um eine rechtmäßige Beglaubigung durchzuführen, bedarf es
                  einer Identitätsüberprüfung per VideoIdent. Dies dauert in der
                  Regel wenige Minuten.
                </p>
              </li>
              <li>
                <h3 data-num="3">Notariell beglaubigen</h3>
                <p>
                  Im letzten Schritt werden Sie mit einem verfügbaren Notar
                  verbunden, welcher die Beglaubigung durchführt. Dazu werden
                  alle Parteien virtuell per Video online zugeschalten.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="title width-diff1">
          <h2 className="d-none d-md-block">
            Legen Sie jetzt ganz einfach los
          </h2>
          <a href="../funnel.html" className="solid-fill">
            AUSPROBIEREN
          </a>
          <p>
            <span>100% Geld-Zürück-Garantie</span>
          </p>
        </div>

        <div className="box-shadow">
          <div className="title width-diff1">
            <h2>Was wird unterstützt</h2>
            <p>Unterzeichnen Sie Dokumente elektronisch und stellen</p>
          </div>
          <div className="row">
            <div className="d-lg-block .d-xl-none col-left">
              <ul className="support-list spacing-block">
                <li className="">
                  <div className="support-item" data-tabs="support_1">
                    <div className="support-img">
                      <img src="/images/how-001.png" alt="" />
                    </div>
                    <h3>Kaufverträge</h3>
                  </div>
                </li>
                <li>
                  <div className="support-item" data-tabs="support_2">
                    <div className="support-img">
                      <img src="/images/how-002.png" alt="" />
                    </div>
                    <h3>Gesellschafterverträge</h3>
                  </div>
                </li>
                <li>
                  <div className="support-item" data-tabs="support_3">
                    <div className="support-img">
                      <img src="/images/how-002.png" alt="" />
                    </div>
                    <h3>
                      Kopien <span className="badge badge-signiert">BALD</span>
                    </h3>
                  </div>
                </li>
                <li>
                  <div className="support-item" data-tabs="support_4">
                    <div className="support-img">
                      <img src="/images/how-001.png" alt="" />
                    </div>
                    <h3>Gesellschafterverträge</h3>
                  </div>
                </li>
                <li>
                  <div className="support-item" data-tabs="support_5">
                    <div className="support-img">
                      <img src="/images/how-003.png" alt="" />
                    </div>
                    <h3>Immobileienkauf</h3>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-right">
              <div
                className="spacing-block support-category"
                data-tabcontainer="tabs"
              >
                <div className="support-item" data-tabs="support_1">
                  <div className="support-img">
                    <img src="/images/how-001.png" alt="" />
                  </div>
                  <h3>Kaufverträge</h3>
                </div>
                <div className="support-description active" id="support_1">
                  <div className="support-unit">
                    <h3>Welche Art</h3>
                    <p>
                      Unterzeichnen Sie Dokumente elektronisch und stellen Sie
                      von
                    </p>
                    <h3>Kosten</h3>
                    <p>
                      Unterzeichnen Sie Dokumente elektronisch und stellen Sie
                      von jedem Gerät aus eine Verbindung zu einem Live
                    </p>
                    <h3>Zeitaufwand</h3>
                    <p>
                      Unterzeichnen Sie Dokumente elektronisch und stellen Sie
                      von jedem Gerät aus eine Verbindung zu einem Live-Notar
                      her. Preisgekrönte App. 24x7 verfügbar.
                    </p>
                  </div>
                  <p>
                    <b>Mehr erfahren</b>
                  </p>
                </div>
                <div className="support-item" data-tabs="support_2">
                  <div className="support-img">
                    <img src="/images/how-002.png" alt="" />
                  </div>
                  <h3>Gesellschafterverträge</h3>
                </div>
                <div className="support-description" id="support_2">
                  <div className="support-unit">
                    <h3>Gesellschafterverträge</h3>
                    <p>
                      Unterzeichnen Sie Dokumente elektronisch und stellen Sie
                      von
                    </p>
                    <h3>Kosten</h3>
                    <p>
                      Unterzeichnen Sie Dokumente elektronisch und stellen Sie
                      von jedem Gerät aus eine Verbindung zu einem Live
                    </p>
                    <h3>Zeitaufwand</h3>
                    <p>
                      Unterzeichnen Sie Dokumente elektronisch und stellen Sie
                      von jedem Gerät aus eine Verbindung zu einem Live-Notar
                      her. Preisgekrönte App. 24x7 verfügbar.
                    </p>
                  </div>
                  <p>
                    <b>Mehr erfahren</b>
                  </p>
                </div>
                <div className="support-item" data-tabs="support_3">
                  <div className="support-img">
                    <img src="/images/how-002.png" alt="" />
                  </div>
                  <h3>
                    Kopien <span className="badge badge-signiert">BALD</span>
                  </h3>
                </div>
                <div className="support-description" id="support_3">
                  <div className="support-unit">
                    <h3>Kopien</h3>
                    <p>
                      Unterzeichnen Sie Dokumente elektronisch und stellen Sie
                      von
                    </p>
                    <h3>Kosten</h3>
                    <p>
                      Unterzeichnen Sie Dokumente elektronisch und stellen Sie
                      von jedem Gerät aus eine Verbindung zu einem Live
                    </p>
                    <h3>Zeitaufwand</h3>
                    <p>
                      Unterzeichnen Sie Dokumente elektronisch und stellen Sie
                      von jedem Gerät aus eine Verbindung zu einem Live-Notar
                      her. Preisgekrönte App. 24x7 verfügbar.
                    </p>
                  </div>
                  <p>
                    <b>Mehr erfahren</b>
                  </p>
                </div>
                <div className="support-item" data-tabs="support_4">
                  <div className="support-img">
                    <img src="/images/how-001.png" alt="" />
                  </div>
                  <h3>Gesellschafterverträge</h3>
                </div>
                <div className="support-description" id="support_4">
                  <div className="support-unit">
                    <h3>Gesellschafterverträge</h3>
                    <p>
                      Unterzeichnen Sie Dokumente elektronisch und stellen Sie
                      von
                    </p>
                    <h3>Kosten</h3>
                    <p>
                      Unterzeichnen Sie Dokumente elektronisch und stellen Sie
                      von jedem Gerät aus eine Verbindung zu einem Live
                    </p>
                    <h3>Zeitaufwand</h3>
                    <p>
                      Unterzeichnen Sie Dokumente elektronisch und stellen Sie
                      von jedem Gerät aus eine Verbindung zu einem Live-Notar
                      her. Preisgekrönte App. 24x7 verfügbar.
                    </p>
                  </div>
                  <p>
                    <b>Mehr erfahren</b>
                  </p>
                </div>
                <div className="support-item" data-tabs="support_5">
                  <div className="support-img">
                    <img src="/images/how-003.png" alt="" />
                  </div>
                  <h3>Immobileienkauf</h3>
                </div>
                <div className="support-description" id="support_5">
                  <div className="support-unit">
                    <h3>Immobileienkauf</h3>
                    <p>
                      Unterzeichnen Sie Dokumente elektronisch und stellen Sie
                      von
                    </p>
                    <h3>Kosten</h3>
                    <p>
                      Unterzeichnen Sie Dokumente elektronisch und stellen Sie
                      von jedem Gerät aus eine Verbindung zu einem Live
                    </p>
                    <h3>Zeitaufwand</h3>
                    <p>
                      Unterzeichnen Sie Dokumente elektronisch und stellen Sie
                      von jedem Gerät aus eine Verbindung zu einem Live-Notar
                      her. Preisgekrönte App. 24x7 verfügbar.
                    </p>
                  </div>
                  <p>
                    <b>Mehr erfahren</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section-hidden">
        <div className="container review-new">
          <h2 className="text-center pb-5">Das sagen Unsere Kunden</h2>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="review-title">
                <h2>1000+ Kunden vertrauen uns</h2>
                <ul className="review-list">
                  <li>
                    <div className="rating-star">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p>
                      <span>5/5</span> auf Capterra
                    </p>
                  </li>
                  <li>
                    <div className="rating-star">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p>
                      <span>5/5</span> auf Capterra
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="review-item">
                <div className="review-card">
                  <div className="rating-title">
                    <p>
                      <b>Beeindruckender Service</b>
                    </p>
                    <div className="star-each"></div>
                  </div>
                  <p>
                    Die Abwicklug des Immobiliekaufs im Umkreis Wien konnte
                    bequem online erledigt werden. Ich war überrascht, dass es
                    tatsächlich so schnell ging. Vielen Dank an das Team.
                  </p>
                  <p>Lorenz Binder</p>
                </div>
                <div className="review-card">
                  <div className="rating-title">
                    <p>
                      <b>Top Beratung</b>
                    </p>
                    <div className="star-each"></div>
                  </div>
                  <p>
                    Ich war zu Beginn nochnicht ganz sicher, ob tatsächlich
                    möglich ist den Kaufvertrag online beglaubigen zu lassen.
                    Aber beglaubigt.de hat gezeigt, dass es funktioniert.{" "}
                  </p>
                  <p>Elisabeth Kurtes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-lg-6">
              <div className="trustpilot2">
                <a href="#">
                  Lese alle Bewertungen auf{" "}
                  <img
                    src="/images/trustpilopt-2.png"
                    className="img"
                    width="72"
                    height="30"
                    alt="trustpilot"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-bluegray">
        <div className="container">
          <div className="title width-diff2">
            <h4>
              <span>JETZT AUSPROBIEREN</span>
            </h4>
            <h2>Unsere Vorteile sind deine Ersparnis</h2>
          </div>
          <div className="row row-padding">
            <div className="d-none d-lg-block col-lg-6 col-padding">
              <div className="advantage-card inactive">
                <h4>
                  <b>Normaler Notar</b>
                </h4>
                <p>Wartezeiten und Fahrweg</p>
                <ul className="advantage-list">
                  <li>
                    <div className="adv-img">
                      <img src="/images/good-001.png" alt="" />
                    </div>
                    <div className="adv-content">
                      <p>Dauer</p>
                      <p>
                        <b>bis zu 2 Wochen</b>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="adv-img">
                      <img src="/images/good-002.png" alt="" />
                    </div>
                    <div className="adv-content">
                      <p>Erfolgschancen</p>
                      <p>
                        <b>&lt;90%</b>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="adv-img">
                      <img src="/images/good-003.png" alt="" />
                    </div>
                    <div className="adv-content">
                      <p>Kostenrisiko</p>
                      <p>
                        <b>keins</b>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="adv-img">
                      <img src="/images/good-004.png" alt="" />
                    </div>
                    <div className="adv-content">
                      <p>Arbeitsaufwand</p>
                      <p>
                        <b>hoch</b>
                      </p>
                    </div>
                  </li>
                </ul>
                <h5>~2 Wochen Zeitaufwand</h5>
              </div>
            </div>
            <div className="col-lg-6 col-padding">
              <div className="advantage-card active">
                <h4>
                  <b>beglaubigt</b>.de
                </h4>
                <p>schnell & sicher</p>
                <ul className="advantage-list">
                  <li>
                    <div className="adv-img">
                      <img src="/images/good-001.png" alt="" />
                    </div>
                    <div className="adv-content">
                      <p>Dauer</p>
                      <p>
                        <b>innerhalb 24h</b>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="adv-img">
                      <img src="/images/good-002.png" alt="" />
                    </div>
                    <div className="adv-content">
                      <p>Erfolgschancen</p>
                      <p>
                        <b>&lt;90%</b>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="adv-img">
                      <img src="/images/good-003.png" alt="" />
                    </div>
                    <div className="adv-content">
                      <p>Kostenrisiko</p>
                      <p>
                        <b>keins</b>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="adv-img">
                      <img src="/images/good-004.png" alt="" />
                    </div>
                    <div className="adv-content">
                      <p>Arbeitsaufwand</p>
                      <p>
                        <b>niedrig</b>
                      </p>
                    </div>
                  </li>
                </ul>
                <a href="../funnel.html" className="solid-fill">
                  Jetzt Anfrage starten
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="title width-diff1">
        <h2>Häufig gestellte Fragen unserer Nutzer</h2>
      </div>
      <ul className="faq-list">
        <li data-accordion>
          <h6 className="accordion-handle">
            Ist der Service von beglaubigt.de legitim?
          </h6>
          <p className="accordion-slide">
            Ja! Der Service basiert auf dere kürzlch erlassenen
            Gesetzesanpassung, welches Beglaubigungen auf dem digitalen Weg
            rechtsgültig machen.
          </p>
          <button className="datapoint-arrow accordion-handle"></button>
        </li>
        <li data-accordion>
          <h6 className="accordion-handle">
            Was kostet die Nutzung des Services?
          </h6>
          <p className="accordion-slide">
            Wir legen wert auf eine transparente Kostenstructur. Diese kann
            unter Gebühren eingesehen werden. Wir bieten unterschiedliche Pakete
            für diverse Anwendungsfälle an.
          </p>
          <button className="datapoint-arrow accordion-handle"></button>
        </li>
        <li data-accordion>
          <h6 className="accordion-handle">
            Wie funktioniert der Prozess bis hin zur Beglaubigung?
          </h6>
          <p className="accordion-slide">
            Im Allgemeinen gibt es drei Schritte bishin zur Beglaubigung. Im
            ersten Schritt muss offiziell eine Anfrage über unsere Plattform
            gestellt werden und alle weiteren Dokumenten müssen hochgeladen
            werden. Im zweiten Schritt kommt es zur Verifizierung aller Partein
            und zur Vorbereitung der Beglaubigung. Anschließend findet die
            Beglaubigung dann über ein Videoverfahren statt.
          </p>
          <button className="datapoint-arrow accordion-handle"></button>
        </li>
      </ul>

      <div className="flex-orderchange">
        <div className="title width-diff1">
          <h2>Lege jetzt ganz einfach los</h2>
          <a href="../funnel.html" className="solid-fill">
            AUSPROBIEREN
          </a>
          <p className="border-line">
            <span>100% Geld-Zürück-Garantie</span>
          </p>
        </div>

        <div className="register">
          <div className="feature-block">
            <div className="feature-img">
              <img src="/images/trust-001.png" alt="" />
            </div>
            <div className="feature-content">
              <h3>Registriert und reguliert</h3>
              <p>von IHK Berlin</p>
            </div>
          </div>
          <div className="feature-block">
            <div className="feature-img">
              <img src="/images/trust-002.png" alt="" />
            </div>
            <div className="feature-content">
              <h3>SSL sichere Verbindung</h3>
              <p>Höchtser PKI Status</p>
            </div>
          </div>
          <div className="feature-block">
            <div className="feature-img">
              <img src="/images/trust-003.png" alt="" />
            </div>
            <div className="feature-content">
              <h3>SSL sichere Verbindung</h3>
              <p>Höchtser PKI Status</p>
            </div>
          </div>
          <div className="feature-block">
            <div className="feature-img">
              <img src="/images/germany-icon.svg" alt="" />
            </div>
            <div className="feature-content">
              <h3>Deutscher Server </h3>
              <p>Deutschland Aktiv</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
