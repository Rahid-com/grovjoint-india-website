
import GlobalPresenceClientMarquee from '@/components/GlobalPresenceClientMarquee';
import { Shell } from '@/components/Site';
import { MapPin } from 'lucide-react';
import ClientLogoMarquee from '@/components/ClientLogoMarquee';

export default function Global() {
  return (
    <Shell>
      <main className="global-page">

        {/* GLOBAL PRESENCE HERO */}
        <section className="global-hero">
          <div className="global-hero-inner">

            <div className="global-copy">
              <div className="global-eyebrow">
                <span></span>
                GLOBAL PRESENCE
                <span></span>
              </div>

              <h1>
                Serving piping-system requirements beyond borders.
              </h1>

              <p>
                Grovjoint India’s catalogue identifies its vision to become
                a leading provider of ductile iron pipe fittings in the
                Asian subcontinent.
              </p>

              <p>
                For export, distribution or project enquiries, contact our
                team with your destination market, product models, sizes
                and required quantities.
              </p>

              {/* JAD DISTRIBUTOR CARD */}
              <div className="global-distributor-card global-distributor-card-new">

                {/* JAD LOGO */}
                <div className="global-jad-logo-panel">
                  <img
                    src="/images/cilents/jad.jpeg"
                    alt="JAD Al Riyadh Trading Co. Ltd. logo"
                  />
                </div>

                {/* DISTRIBUTOR INFORMATION */}
                <div className="global-jad-info">

                  <div className="global-jad-heading">
                    <span>DISTRIBUTORS</span>
                    <h3>JAD Al Riyadh Trading Co. Ltd.</h3>
                  </div>

                  <p className="global-jad-address">
                    <MapPin size={18} />
                    <span>
                      King Abdul Aziz Road, Sulimaniyah, Natcom Building,
                      2nd Floor, Office #12, Riyadh, Saudi Arabia.
                    </span>
                  </p>

                  <div className="global-jad-contact">
                    <p>
                      Email: <a href="mailto:sale@jad.com.sa">
                       sale@jad.com.sa
                      </a>
                    </p>

                    <p>Tel: +966 11 217 1101</p>

                    <p>Fax: +966 11 217 1194</p>
                  </div>

                </div>
              </div>
            </div>

            {/* WORLD MAP */}
            <div className="global-map-area">
              <img
                className="global-world-map-image"
                src="/images/world-map.svg"
                alt="World map showing Grovjoint India's international connections"
              />




<svg
  className="global-map-routes"
  viewBox="0 0 360 180"
  preserveAspectRatio="none"
  aria-label="Grovjoint India international destinations"
>
  <defs>
    <filter id="map-label-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="0.8" stdDeviation="0.7" floodOpacity="0.16" />
    </filter>
  </defs>

  {/* CANADA */}
  <g className="map-place">
    <circle cx="104" cy="45" r="2.5" />
    <g className="map-label">
      <rect x="94" y="33" width="25" height="7" rx="2" />
      <text x="106.5" y="37.8">CANADA</text>
    </g>
  </g>

  {/* USA */}
  <g className="map-place">
    <circle cx="84" cy="57" r="2.5" />
    <g className="map-label">
      <rect x="67" y="60" width="18" height="7" rx="2" />
      <text x="76" y="64.8">USA</text>
    </g>
  </g>

  {/* UNITED KINGDOM */}
  <g className="map-place">
    <circle cx="180" cy="38.5" r="2.5" />
    <g className="map-label">
      <rect x="174" y="27" width="13" height="7" rx="2" />
      <text x="180.5" y="31.8">UK</text>
    </g>
  </g>

  {/* EGYPT */}
  <g className="map-place">
    <circle cx="211" cy="60" r="2.5" />
    <g className="map-label">
      <rect x="189" y="65" width="22" height="7" rx="2" />
      <text x="200" y="69.8">EGYPT</text>
    </g>
  </g>

  {/* SAUDI ARABIA - RIYADH */}
  <g className="map-place">
    <circle cx="226.7" cy="65.3" r="2.5" />
    <g className="map-label">
      <rect x="207" y="73" width="29" height="7" rx="2" />
      <text x="221.5" y="77.8">SAUDI ARABIA</text>
    </g>
  </g>

  {/* KUWAIT */}
  <g className="map-place">
    <circle cx="227.9" cy="60.6" r="2.2" />
    <g className="map-label">
      <rect x="244" y="43" width="23" height="7" rx="2" />
      <text x="255.5" y="47.8">KUWAIT</text>
    </g>
  </g>

  {/* QATAR */}
  <g className="map-place">
    <circle cx="231.5" cy="64.7" r="2.2" />
    <g className="map-label">
      <rect x="245" y="52" width="19" height="7" rx="2" />
      <text x="254.5" y="56.8">QATAR</text>
    </g>
  </g>

  {/* BAHRAIN */}
  <g className="map-place">
    <circle cx="230.6" cy="63.8" r="2.2" />
    <g className="map-label">
      <rect x="245" y="61" width="25" height="7" rx="2" />
      <text x="257.5" y="65.8">BAHRAIN</text>
    </g>
  </g>

  {/* UAE - DUBAI */}
  <g className="map-place">
    <circle cx="235.3" cy="64.8" r="2.5" />
    <g className="map-label">
      <rect x="243" y="72" width="32" height="7" rx="2" />
      <text x="259" y="76.8">UAE (DUBAI)</text>
    </g>
  </g>

  {/* TAMIL NADU - INDIA ORIGIN */}
  <g className="map-origin">
    <circle cx="258.1" cy="79" r="4.2" />
    <circle cx="258.1" cy="79" r="1.5" className="origin-inner" />

    <g className="origin-label">
      <rect x="266" y="76" width="42" height="14" rx="3" />
      <path d="M266 83 L261 79" />
      <text x="287" y="82">TAMIL NADU</text>
      <text x="287" y="86.5" className="origin-country">INDIA</text>
    </g>
  </g>
</svg>


            </div>

          </div>
        </section>

        {/* MAJOR CLIENTS */}
        <section className="global-clients-section">
          <ClientLogoMarquee />
        </section>

      </main>
    </Shell>
  );
}
